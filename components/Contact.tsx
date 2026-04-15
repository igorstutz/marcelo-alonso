"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative py-24 lg:py-32 bg-hero-gradient text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="eyebrow text-brand-200">Contato</span>
          <h2 className="section-title mt-4 text-white">
            Vamos conversar sobre{" "}
            <span className="italic text-brand-200">você</span>
          </h2>
          <p className="mt-6 text-lg text-white/80">
            A primeira consulta é um momento de escuta. Conte seus objetivos e
            o Dr. Marcelo desenhará o caminho mais seguro e natural para sua
            transformação.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15"
          >
            <MessageCircle size={32} className="text-brand-200" />
            <h3 className="mt-6 text-xl font-semibold">WhatsApp</h3>
            <p className="mt-2 text-white/70">Resposta rápida, agendamento direto.</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-200 group-hover:gap-3 transition-all">
              Iniciar conversa <ArrowRight size={16} />
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href={`tel:+${contact.phoneRaw}`}
            className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15"
          >
            <Phone size={32} className="text-brand-200" />
            <h3 className="mt-6 text-xl font-semibold">Telefone</h3>
            <p className="mt-2 text-white/70">{contact.phone}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-200 group-hover:gap-3 transition-all">
              Ligar agora <ArrowRight size={16} />
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15"
          >
            <Instagram size={32} className="text-brand-200" />
            <h3 className="mt-6 text-xl font-semibold">Instagram</h3>
            <p className="mt-2 text-white/70">{contact.instagramHandle}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-200 group-hover:gap-3 transition-all">
              Ver trabalhos <ArrowRight size={16} />
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-3 text-sm text-white/60"
        >
          <Mail size={16} />
          <a href={`mailto:${contact.email}`} className="hover:text-white">
            {contact.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
