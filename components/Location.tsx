"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Car } from "lucide-react";
import { contact } from "@/lib/data";

export default function Location() {
  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Localização</span>
          <h2 className="section-title mt-4">
            No coração da{" "}
            <span className="italic text-brand-600">Barra da Tijuca</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-700">
            O consultório fica no Barralife Medical Center, uma das mais
            completas estruturas hospitalares da zona oeste do Rio de Janeiro.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">Endereço</h3>
                <p className="mt-1 text-brand-700">
                  Av. Armando Lombardi, 1.000 — Bloco 02, Salas 101/102
                  <br />
                  Barra da Tijuca, Rio de Janeiro — RJ
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">Horário</h3>
                <p className="mt-1 text-brand-700">
                  Segunda a sexta — 09h às 18h
                  <br />
                  Sábado — agendamento sob consulta
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Car size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">Estacionamento</h3>
                <p className="mt-1 text-brand-700">
                  Estacionamento próprio no edifício com acesso facilitado.
                </p>
              </div>
            </div>
          </div>

          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10"
          >
            Agendar visita ao consultório
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-soft border border-brand-100 aspect-[4/5] lg:aspect-square"
        >
          <iframe
            title="Mapa do consultório"
            src="https://www.google.com/maps?q=Av.+Armando+Lombardi,+1000+-+Barra+da+Tijuca,+Rio+de+Janeiro&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
