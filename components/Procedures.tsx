"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Smile,
  User,
  Zap,
  Heart,
  Clock,
  Check,
} from "lucide-react";
import { procedureCategories } from "@/lib/data";
import { asset } from "@/lib/asset";

const categoryIcons: Record<string, typeof Smile> = {
  face: Smile,
  corpo: User,
  minimamente: Zap,
  reparadores: Heart,
};

const categoryImages: Record<string, string> = {
  face: "/images/procedures/face.jpg",
  corpo: "/images/procedures/corpo.jpg",
  minimamente: "/images/procedures/minimamente.jpg",
  reparadores: "/images/procedures/reparadores.jpg",
};

export default function Procedures() {
  const [active, setActive] = useState(procedureCategories[0].id);
  const current =
    procedureCategories.find((c) => c.id === active) ?? procedureCategories[0];
  const CategoryIcon = categoryIcons[current.id] ?? Smile;
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    setActive(id);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      requestAnimationFrame(() => {
        const el = cardsRef.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      });
    }
  };

  return (
    <section
      id="procedimentos"
      className="relative py-24 lg:py-32 bg-brand-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-200/40 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="eyebrow">Procedimentos</span>
          <h2 className="section-title mt-4">
            Técnica e sensibilidade em{" "}
            <span className="italic text-brand-600">cada detalhe</span>
          </h2>
          <p className="mt-6 text-lg text-brand-700">
            Da harmonização facial ao contorno corporal, cada procedimento é
            planejado de forma individualizada.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          {procedureCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] ?? Smile;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`group relative inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-brand-700 text-white shadow-soft"
                    : "bg-white text-brand-700 hover:bg-brand-100"
                }`}
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "bg-brand-100 text-brand-600 group-hover:bg-brand-200"
                  }`}
                >
                  <Icon size={14} />
                </div>
                <span>{cat.title}</span>
                <span
                  className={`ml-1 rounded-full px-2 py-0.5 text-[11px] ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-brand-100 text-brand-600"
                  }`}
                >
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="mt-10 grid lg:grid-cols-12 gap-8"
          >
            <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 h-fit">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(categoryImages[current.id])}
                  alt={current.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/60 to-brand-950/20" />

                <div className="relative h-full p-8 flex flex-col text-white">
                  <motion.div
                    key={current.id + "-icon"}
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20"
                  >
                    <CategoryIcon size={28} />
                  </motion.div>

                  <div className="mt-auto">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                      Categoria
                    </div>
                    <h3 className="mt-2 text-2xl lg:text-3xl font-semibold leading-tight">
                      {current.title}
                    </h3>
                    <p className="mt-3 text-sm italic text-white/85 leading-relaxed">
                      {current.subtitle}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-wider text-white/80">
                      <Check size={14} />
                      <span>{current.items.length} procedimentos disponíveis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref={cardsRef} className="lg:col-span-8">
              <div className="lg:hidden relative overflow-hidden rounded-2xl shadow-soft mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(categoryImages[current.id])}
                  alt={current.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/50" />
                <div className="relative p-5 flex items-center gap-4 text-white">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/20">
                    <CategoryIcon size={22} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-200">
                      {current.items.length} procedimentos
                    </div>
                    <h3 className="text-lg font-semibold leading-tight truncate">
                      {current.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
              {current.items.slice(0, 6).map((proc, i) => (
                <motion.div
                  key={proc.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    href={`/procedimentos/${proc.slug}`}
                    className="group relative block h-full overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-soft"
                  >
                    <div className="absolute top-0 left-0 h-1 w-0 bg-brand-600 transition-all duration-500 group-hover:w-full" />
                    <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-brand-100 opacity-0 transition duration-500 group-hover:opacity-70" />

                    <div className="relative flex items-start justify-between gap-3">
                      <span className="text-xs font-semibold text-brand-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-brand-400 transition group-hover:text-brand-700 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                    <h3 className="relative mt-4 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
                      {proc.name}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-brand-600 line-clamp-3">
                      {proc.description}
                    </p>
                    <div className="relative mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-500 group-hover:text-brand-700">
                      <Clock size={12} />
                      <span>{proc.quickInfo.duration}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 flex justify-center">
          <Link href="/procedimentos" className="btn-primary">
            Ver todos os procedimentos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
