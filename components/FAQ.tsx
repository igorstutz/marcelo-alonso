"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A consulta é uma conversa franca sobre seus objetivos e histórico. O Dr. Marcelo faz avaliação clínica completa, explica as opções cirúrgicas mais adequadas ao seu caso e esclarece todas as dúvidas — sem pressa e sem compromisso de fechar a cirurgia no mesmo dia.",
  },
  {
    q: "Quais exames são necessários antes da cirurgia?",
    a: "Os exames pré-operatórios variam conforme o procedimento e o histórico do paciente. Em geral incluem hemograma, coagulograma, glicemia, função renal e hepática, além de eletrocardiograma e avaliação cardiológica para pacientes acima de 40 anos. A lista completa é entregue na consulta.",
  },
  {
    q: "A cirurgia é feita em hospital ou clínica?",
    a: "Todas as cirurgias são realizadas no Barralife Medical Center, uma estrutura hospitalar completa na Barra da Tijuca, com centro cirúrgico equipado, UTI de retaguarda, equipe de anestesistas titulados e enfermagem especializada — garantindo máxima segurança ao paciente.",
  },
  {
    q: "Qual o tempo médio de recuperação?",
    a: "Depende do procedimento. Cirurgias minimamente invasivas (como blefaroplastia ou bichectomia) permitem retorno social em 5–10 dias. Cirurgias maiores (abdominoplastia, mastopexia, lifting) pedem 14 a 21 dias de afastamento. O retorno pleno a exercícios físicos costuma acontecer entre 30 e 60 dias.",
  },
  {
    q: "Os resultados são permanentes?",
    a: "Os resultados são duradouros, mas não eternos — o corpo continua envelhecendo naturalmente após a cirurgia. Próteses mamárias têm durabilidade de muitos anos, mas podem precisar de troca eventualmente. Lipoaspiração é definitiva nas células removidas, mas novo ganho de peso pode afetar áreas não tratadas.",
  },
  {
    q: "Quais são os riscos de uma cirurgia plástica?",
    a: "Toda cirurgia envolve riscos — como qualquer procedimento médico. Os principais são relacionados à anestesia, cicatrização, infecção e hematomas. Escolher um cirurgião titulado pela SBCP, realizar a cirurgia em ambiente hospitalar e seguir rigorosamente as orientações pré e pós-operatórias reduzem drasticamente esses riscos.",
  },
  {
    q: "Posso combinar mais de um procedimento?",
    a: "Sim, em muitos casos é possível e até recomendado combinar procedimentos — por exemplo, lipoaspiração com abdominoplastia, ou mastopexia com prótese. A indicação depende da segurança cirúrgica, do tempo total de anestesia e da capacidade de recuperação do paciente. Essa avaliação é feita caso a caso na consulta.",
  },
  {
    q: "Como é feito o acompanhamento pós-operatório?",
    a: "Os retornos são programados nos primeiros dias, semanas e meses após a cirurgia. Entre as consultas, a equipe fica disponível pelo WhatsApp para dúvidas. O acompanhamento continua até o resultado final se consolidar — o que pode levar de alguns meses a um ano, dependendo do procedimento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-brand-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-brand-200/50 blur-3xl" />

      <div className="container-x relative grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 lg:sticky lg:top-28 h-fit"
        >
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="section-title mt-4">
            Suas dúvidas,{" "}
            <span className="italic text-brand-600">respondidas</span>
          </h2>
          <p className="mt-6 text-lg text-brand-700">
            Transparência do primeiro contato ao resultado final. Se ainda
            restar alguma dúvida, fale diretamente com nossa equipe.
          </p>

          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-brand-200 bg-white p-5 transition hover:border-brand-400 hover:shadow-soft"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
              <MessageCircle size={22} />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                Fale conosco
              </div>
              <div className="mt-0.5 font-semibold text-brand-900">
                {contact.phone}
              </div>
            </div>
          </a>
        </motion.div>

        <div className="lg:col-span-8 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "border-brand-400 bg-white shadow-soft"
                    : "border-brand-100 bg-white/70 hover:border-brand-300 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-brand-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-brand-900">
                      {faq.q}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-brand-600 text-white"
                        : "bg-brand-100 text-brand-600"
                    }`}
                  >
                    <Plus size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-16">
                        <p className="text-brand-700 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
