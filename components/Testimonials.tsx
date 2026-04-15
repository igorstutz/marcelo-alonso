"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { asset } from "@/lib/asset";

const images = Array.from({ length: 30 }, (_, i) =>
  `/images/testimonials/${String(i + 1).padStart(2, "0")}.jpg`
);

const rowA = images.slice(0, 15);
const rowB = images.slice(15);

export default function Testimonials() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="depoimentos" className="relative py-20 lg:py-32 bg-brand-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-200/40 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="section-title mt-4">
            O que nossas{" "}
            <span className="italic text-brand-600">pacientes dizem</span>
          </h2>
          <p className="mt-6 text-lg text-brand-700 leading-relaxed">
            Mensagens reais enviadas por pacientes que já passaram pelo consultório.
            Histórias verdadeiras de quem confiou no Dr. Marcelo Alonso para
            transformar o seu sonho em realidade.
          </p>
        </div>
      </div>

      <div className="relative mt-16 space-y-6">
        <Marquee items={rowA} direction="left" duration={80} offset={0} onOpen={open} />
        <Marquee items={rowB} direction="right" duration={90} offset={15} onOpen={open} />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-brand-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-brand-50 to-transparent" />
      </div>

      <div className="container-x relative mt-14 flex flex-col items-center gap-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700">
          <Quote size={14} />
          Toque em qualquer mensagem para ampliar
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition hover:bg-white/20"
              aria-label="Fechar"
            >
              <X size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 sm:left-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition hover:bg-white/20"
              aria-label="Anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 sm:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition hover:bg-white/20"
              aria-label="Próxima"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-md w-full pointer-events-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(images[lightbox])}
                alt={`Depoimento ${lightbox + 1}`}
                className="w-full max-h-[85vh] object-contain rounded-2xl"
              />
              <div className="mt-4 text-center text-sm text-white/70">
                {String(lightbox + 1).padStart(2, "0")} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Marquee({
  items,
  direction,
  duration,
  offset,
  onOpen,
}: {
  items: string[];
  direction: "left" | "right";
  duration: number;
  offset: number;
  onOpen: (index: number) => void;
}) {
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max gap-4 sm:gap-6"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {loop.map((src, i) => {
          const realIndex = offset + (i % items.length);
          return (
            <button
              key={`${src}-${i}`}
              onClick={() => onOpen(realIndex)}
              className="relative shrink-0 w-[220px] sm:w-[260px] overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-brand-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(src)}
                alt="Depoimento de paciente"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
