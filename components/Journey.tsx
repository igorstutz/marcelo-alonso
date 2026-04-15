"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import {
  MessageCircle,
  ClipboardList,
  Stethoscope,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    subtitle: "Acolhimento e agendamento",
    text: "Você fala diretamente com a equipe pelo WhatsApp. Esclarecemos dúvidas iniciais, explicamos como funciona a consulta e agendamos em horário confortável para você.",
  },
  {
    icon: ClipboardList,
    title: "Consulta e avaliação",
    subtitle: "Diagnóstico individualizado",
    text: "Uma conversa franca sobre seus desejos, histórico e expectativas. Avaliação clínica completa e apresentação das opções cirúrgicas — sempre respeitando seu biotipo.",
  },
  {
    icon: Stethoscope,
    title: "Planejamento cirúrgico",
    subtitle: "Segurança em primeiro lugar",
    text: "Exames pré-operatórios, avaliação anestésica e orientações detalhadas. Você recebe um plano claro: técnica, anestesia, tempo de internação e cuidados prévios.",
  },
  {
    icon: HeartPulse,
    title: "Dia da cirurgia",
    subtitle: "Estrutura hospitalar completa",
    text: "Procedimento realizado no Barralife Medical Center, com equipamentos de última geração, anestesista de confiança e equipe cirúrgica treinada.",
  },
  {
    icon: CheckCircle2,
    title: "Pós-operatório",
    subtitle: "Acompanhamento próximo",
    text: "Retornos programados, acesso direto à equipe para dúvidas e orientações detalhadas de recuperação. Acompanhamento até o resultado definitivo.",
  },
];

export default function Journey() {
  const [active, setActive] = useState(0);
  const Current = steps[active].icon;

  return (
    <section id="jornada" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-brand-100/50 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="eyebrow">Jornada do paciente</span>
          <h2 className="section-title mt-4">
            Cada etapa pensada{" "}
            <span className="italic text-brand-600">para você</span>
          </h2>
          <p className="mt-6 text-lg text-brand-700">
            Do primeiro contato ao acompanhamento final — um caminho claro,
            seguro e humanizado, construído ao seu lado.
          </p>
        </div>

        {/* Mobile: accordion */}
        <div className="mt-12 lg:hidden space-y-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isOpen = active === i;
            return (
              <div
                key={step.title}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "border-brand-600 bg-brand-50 shadow-soft"
                    : "border-brand-100 bg-white"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition ${
                      isOpen
                        ? "bg-brand-600 text-white"
                        : "bg-brand-100 text-brand-600"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-500">
                      Etapa {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-0.5 font-semibold text-brand-900">
                      {step.title}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-brand-600 text-white"
                        : "bg-brand-100 text-brand-600"
                    }`}
                  >
                    <Plus size={16} />
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
                      <div className="px-5 pb-5 pl-[4.75rem]">
                        <p className="text-sm italic text-brand-500 mb-2">
                          {step.subtitle}
                        </p>
                        <p className="text-brand-700 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: split layout */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;
              return (
                <button
                  key={step.title}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left rounded-2xl border p-5 transition ${
                    isActive
                      ? "border-brand-600 bg-brand-50 shadow-soft"
                      : "border-brand-100 bg-white hover:border-brand-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition ${
                        isActive
                          ? "bg-brand-600 text-white"
                          : "bg-brand-100 text-brand-600 group-hover:bg-brand-200"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                        Etapa {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-0.5 font-semibold text-brand-900">
                        {step.title}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      className="h-6 w-6 rounded-full border border-brand-200 flex items-center justify-center text-brand-600"
                    >
                      →
                    </motion.div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 lg:p-14 text-white shadow-soft"
            >
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-300/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                    <Current size={28} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                      Etapa {String(active + 1).padStart(2, "0")} de{" "}
                      {String(steps.length).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-sm italic text-white/70">
                      {steps[active].subtitle}
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-3xl lg:text-4xl font-semibold text-white">
                  {steps[active].title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-white/85">
                  {steps[active].text}
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-1 flex-1 rounded-full bg-white/15 overflow-hidden">
                    <motion.div
                      key={active}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((active + 1) / steps.length) * 100}%`,
                      }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-white"
                    />
                  </div>
                  <div className="text-xs font-semibold text-white/80">
                    {Math.round(((active + 1) / steps.length) * 100)}%
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setActive(Math.max(0, active - 1))}
                    disabled={active === 0}
                    className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    ← Anterior
                  </button>
                  <button
                    onClick={() =>
                      setActive(Math.min(steps.length - 1, active + 1))
                    }
                    disabled={active === steps.length - 1}
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Próxima etapa →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
