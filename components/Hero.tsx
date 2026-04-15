"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, ShieldCheck } from "lucide-react";
import { contact } from "@/lib/data";
import { asset } from "@/lib/asset";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient text-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/images/home-hero.jpg")}
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-900/70 to-brand-800/85" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-400/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-300/20 blur-3xl"
      />

      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-12 items-center pt-32 pb-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm sm:px-4">
            <Sparkles size={14} className="shrink-0 text-brand-200" />
            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-white/90 sm:text-xs sm:tracking-[0.2em]">
              Cirurgia Plástica · Rio de Janeiro
            </span>
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] text-white">
            Realize seu sonho,
            <br />
            <span className="italic text-brand-200">transforme sua vida.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
            Cirurgia plástica com dedicação, seriedade e respeito. Resultados
            naturais pensados para preservar o equilíbrio individual de cada
            paciente.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white !text-brand-900 hover:!bg-brand-50"
            >
              Agendar avaliação
              <ArrowRight size={16} />
            </a>
            <a
              href="#procedimentos"
              className="btn-ghost border-white/30 bg-white/5 !text-white hover:!border-white/60"
            >
              Ver procedimentos
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-3xl font-semibold text-white">
                <AnimatedCounter to={15} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-white/70 uppercase tracking-wider">
                anos de carreira
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-3xl font-semibold text-white">
                <AnimatedCounter to={1000} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-white/70 uppercase tracking-wider">
                pacientes atendidos
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-3xl font-semibold text-white">SBCP</div>
              <div className="mt-1 text-xs text-white/70 uppercase tracking-wider">
                membro titular
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/dr-marcelo.jpg")}
              alt="Dr. Marcelo Alonso"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-200">
                Dr. Marcelo Alonso
              </div>
              <div className="mt-1 text-sm text-white/80">
                Cirurgião plástico · {contact.crm}
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-xs text-brand-500 font-semibold uppercase tracking-wider">
                  Membro
                </div>
                <div className="text-sm font-semibold text-brand-900">
                  SBCP & AMB
                </div>
              </div>
            </div>
          </motion.div>

          <motion.a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-2xl transition hover:bg-brand-700"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <Play size={14} className="fill-white" />
            </div>
            <div className="text-xs leading-tight">
              <div className="font-semibold">Veja no Instagram</div>
              <div className="text-white/80">{contact.instagramHandle}</div>
            </div>
          </motion.a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em] animate-pulse">
        role para baixo
      </div>
    </section>
  );
}
