"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Users, Gem } from "lucide-react";
import { differentials, procedureCategories } from "@/lib/data";
import { asset } from "@/lib/asset";
import AnimatedCounter from "./AnimatedCounter";

const icons = [Gem, ShieldCheck, Users, Stethoscope];

const totalProcedures = procedureCategories.reduce(
  (sum, c) => sum + c.items.length,
  0
);

const stats = [
  { to: 15, suffix: "+", label: "anos de carreira" },
  { to: 1000, suffix: "+", label: "pacientes atendidos" },
  { to: totalProcedures, suffix: "", label: "procedimentos oferecidos" },
  { to: 100, suffix: "%", label: "titulação SBCP" },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative py-24 lg:py-32 bg-brand-950 text-white overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/images/home-hero.jpg")}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/95 via-brand-950/90 to-brand-900/95" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-3xl"
      />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow text-brand-300">Diferenciais</span>
          <h2 className="section-title mt-4 text-white">
            Por que escolher o{" "}
            <span className="italic text-brand-300">Dr. Marcelo</span>
          </h2>
          <p className="mt-6 text-lg text-brand-200">
            Uma jornada cuidadosa e segura, sustentada por formação de
            excelência e infraestrutura completa.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <div className="text-5xl font-semibold text-white">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-brand-200">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-brand-400/50 hover:bg-white/10"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition group-hover:bg-brand-500/30" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white transition group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-200">
                    {d.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
