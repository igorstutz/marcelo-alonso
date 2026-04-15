"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { contact } from "@/lib/data";
import { asset } from "@/lib/asset";

const images = [
  "/images/clinic/01.jpg",
  "/images/clinic/02.jpg",
  "/images/clinic/03.jpg",
  "/images/clinic/04.jpg",
  "/images/clinic/05.jpg",
  "/images/clinic/06.jpg",
  "/images/clinic/07.jpg",
  "/images/clinic/08.jpg",
  "/images/clinic/09.jpg",
  "/images/clinic/10.jpg",
  "/images/clinic/11.jpg",
  "/images/clinic/12.jpg",
];

export default function Space() {
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
    <section id="nosso-espaco" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-brand-100/60 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="eyebrow">Nosso espaço</span>
          <h2 className="section-title mt-4">
            Um consultório pensado{" "}
            <span className="italic text-brand-600">para você</span>
          </h2>
          <p className="mt-6 text-lg text-brand-700 leading-relaxed">
            A clínica do Dr. Marcelo Alonso é moderna e confortável. Da recepção
            ao pós-operatório, cada detalhe é pensado para garantir que você se
            sinta segura, acolhida e bem cuidada.
          </p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="mt-12 lg:hidden -mx-6">
          <div className="flex gap-4 overflow-x-auto scrollbar-none px-6 snap-x snap-mandatory">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => open(i)}
                className="group relative flex-shrink-0 w-[80%] aspect-[4/3] overflow-hidden rounded-2xl shadow-soft snap-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(src)}
                  alt={`Consultório — foto ${i + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-900 backdrop-blur-sm">
                  <Maximize2 size={14} />
                </div>
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700 backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")} / {images.length}
                </div>
              </button>
            ))}
          </div>
          <div className="mt-4 px-6 text-center text-xs text-brand-500">
            ← arraste para ver mais →
          </div>
        </div>

        {/* Desktop: mosaic grid */}
        <div className="mt-14 hidden lg:grid grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((src, i) => {
            const patterns = [
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1",
              "col-span-1 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1",
            ];
            return (
              <motion.button
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                onClick={() => open(i)}
                className={`group relative overflow-hidden rounded-2xl shadow-soft ${patterns[i]}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(src)}
                  alt={`Consultório — foto ${i + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-950/0 transition group-hover:bg-brand-950/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-900 backdrop-blur-sm">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agende sua visita
          </a>
        </div>
      </div>

      {/* Lightbox */}
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
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(images[lightbox])}
                alt={`Consultório — foto ${lightbox + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
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
