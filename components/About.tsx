"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, HeartHandshake } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { contact } from "@/lib/data";
import { asset } from "@/lib/asset";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação",
    text: "UFF-RJ, residência no HCE e especialização no Hospital Municipal Barata Ribeiro.",
  },
  {
    icon: Award,
    title: "Titulação",
    text: "Membro da SBCP e da Associação Médica Brasileira.",
  },
  {
    icon: HeartHandshake,
    title: "Filosofia",
    text: "Atendimento humanizado, focado no bem-estar físico, mental e social.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-x relative grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative max-w-md mx-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/dr-marcelo.jpg")}
                alt="Dr. Marcelo Alonso"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-brand-950/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                  Cirurgião Plástico
                </div>
                <div className="mt-1 text-xl font-semibold">
                  Dr. Marcelo Alonso
                </div>
                <div className="mt-0.5 text-xs text-white/80">{contact.crm}</div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl border border-brand-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/amb-sbcp.webp")}
                alt="SBCP & AMB"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-500">
                  Membro
                </div>
                <div className="text-sm font-semibold text-brand-900 leading-tight">
                  SBCP & AMB
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
              className="absolute -top-6 -left-6 flex flex-col items-center justify-center rounded-2xl bg-brand-600 text-white px-5 py-4 shadow-2xl"
            >
              <div className="text-3xl font-semibold leading-none">
                <AnimatedCounter to={15} suffix="+" />
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-brand-100">
                anos de carreira
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <span className="eyebrow">Quem é</span>
          <h2 className="section-title mt-4">
            Dr. Marcelo <span className="italic text-brand-600">Alonso</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-700">
            Cirurgião plástico dedicado a transformar vidas com técnica,
            sensibilidade estética e respeito pela individualidade de cada
            história.
          </p>

          <div className="mt-8 space-y-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-4 rounded-2xl border border-brand-100 bg-gradient-to-r from-white to-brand-50/50 p-5 transition hover:border-brand-300 hover:shadow-soft"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white transition group-hover:scale-110 group-hover:bg-brand-700">
                  <h.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-700">
                    {h.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
