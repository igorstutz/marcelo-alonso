import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Smile,
  User,
  Zap,
  Heart,
  Clock,
  Check,
} from "lucide-react";
import { procedureCategories } from "@/lib/data";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Procedimentos | Dr. Marcelo Alonso",
  description:
    "Conheça todos os procedimentos oferecidos pelo Dr. Marcelo Alonso: cirurgias faciais, corporais, minimamente invasivas e reparadoras.",
};

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

export default function ProcedimentosIndex() {
  const totalProcedures = procedureCategories.reduce(
    (sum, c) => sum + c.items.length,
    0
  );

  return (
    <>
      <section className="relative pt-28 pb-10 lg:pt-40 lg:pb-28 bg-hero-gradient text-white overflow-hidden max-h-[100svh] lg:max-h-none flex lg:block items-center">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-brand-300/10 blur-3xl" />

        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7">
            <nav className="flex items-center gap-2 text-xs text-white/60">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-white/90">Procedimentos</span>
            </nav>

            <h1 className="mt-4 lg:mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white max-w-3xl">
              Técnica e sensibilidade em{" "}
              <span className="italic text-brand-200">cada detalhe</span>
            </h1>
            <p className="mt-4 lg:mt-6 max-w-2xl text-base lg:text-lg text-white/80">
              Da harmonização facial ao contorno corporal, cada procedimento é
              planejado de forma individualizada.
            </p>

            <div className="mt-6 lg:mt-10 flex flex-wrap gap-6 lg:gap-8 text-sm">
              <div>
                <div className="text-2xl lg:text-3xl font-semibold text-white">
                  {totalProcedures}
                </div>
                <div className="mt-1 text-[10px] lg:text-xs uppercase tracking-wider text-white/70">
                  procedimentos
                </div>
              </div>
              <div className="h-10 lg:h-12 w-px bg-white/20" />
              <div>
                <div className="text-2xl lg:text-3xl font-semibold text-white">
                  {procedureCategories.length}
                </div>
                <div className="mt-1 text-[10px] lg:text-xs uppercase tracking-wider text-white/70">
                  categorias
                </div>
              </div>
              <div className="h-10 lg:h-12 w-px bg-white/20" />
              <div>
                <div className="text-2xl lg:text-3xl font-semibold text-white">
                  15+
                </div>
                <div className="mt-1 text-[10px] lg:text-xs uppercase tracking-wider text-white/70">
                  anos
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-10 hidden lg:flex flex-wrap gap-3">
              {procedureCategories.map((cat) => {
                const Icon = categoryIcons[cat.id] ?? Smile;
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    <Icon size={14} />
                    <span>{cat.title}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4">
            {procedureCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.id] ?? Smile;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`group relative overflow-hidden rounded-2xl aspect-[4/5] border border-white/10 transition hover:-translate-y-1 hover:shadow-2xl ${
                    i === 1 ? "mt-8" : ""
                  } ${i === 2 ? "-mt-8" : ""}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(categoryImages[cat.id])}
                    alt={cat.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white">
                      <Icon size={16} />
                    </div>
                    <div className="text-white">
                      <div className="text-[10px] uppercase tracking-wider text-brand-200">
                        {cat.items.length} procedimentos
                      </div>
                      <div className="mt-1 text-sm font-semibold leading-tight">
                        {cat.title}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <div className="lg:hidden sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-sm">
        <div className="container-x">
          <div className="flex gap-2 overflow-x-auto py-3 -mx-6 px-6 scrollbar-none">
            {procedureCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] ?? Smile;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex flex-shrink-0 items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 whitespace-nowrap transition hover:border-brand-400 hover:bg-brand-100"
                >
                  <Icon size={14} />
                  <span>{cat.title}</span>
                  <span className="rounded-full bg-brand-200 px-1.5 text-[10px] text-brand-700">
                    {cat.items.length}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-28 bg-white">
        <div className="container-x space-y-20 lg:space-y-28">
          {procedureCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] ?? Smile;
            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-36 lg:scroll-mt-28">
                <div className="relative overflow-hidden rounded-3xl shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(categoryImages[cat.id])}
                    alt={cat.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-brand-950/30" />
                  <div className="absolute inset-0 bg-grid opacity-20" />

                  <div className="relative p-8 sm:p-10 lg:p-14 min-h-[280px] lg:min-h-[320px] flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white">
                        <Icon size={28} />
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase tracking-[0.2em] text-brand-200">
                          Categoria {String(idx + 1).padStart(2, "0")}
                        </div>
                        <div className="mt-1 text-sm text-white/80">
                          {cat.items.length} procedimentos
                        </div>
                      </div>
                    </div>

                    <div className="max-w-2xl">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                        {cat.title}
                      </h2>
                      <p className="mt-3 text-base sm:text-lg italic text-white/85">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((proc, i) => (
                    <Link
                      key={proc.slug}
                      href={`/procedimentos/${proc.slug}`}
                      className="group relative block h-full overflow-hidden rounded-2xl border border-brand-100 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-400 hover:shadow-soft"
                    >
                      <div className="absolute top-0 left-0 h-1 w-0 bg-brand-600 transition-all duration-500 group-hover:w-full" />
                      <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-brand-100 opacity-0 transition duration-500 group-hover:opacity-70" />

                      <div className="relative">
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-xs font-semibold text-brand-400">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <ArrowUpRight
                            size={18}
                            className="text-brand-400 transition group-hover:text-brand-700 group-hover:-translate-y-1 group-hover:translate-x-1"
                          />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-brand-900 group-hover:text-brand-700">
                          {proc.name}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-brand-600 line-clamp-3">
                          {proc.description}
                        </p>
                        <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-500 group-hover:text-brand-700">
                          <Clock size={12} />
                          <span>{proc.quickInfo.duration}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-brand-950 text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/home-hero.jpg")}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/95 via-brand-950/90 to-brand-900/95" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="container-x relative text-center">
          <span className="eyebrow text-brand-300">Próximo passo</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-3xl mx-auto">
            Qual é o procedimento{" "}
            <span className="italic text-brand-300">certo para você?</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-200">
            Na primeira consulta, o Dr. Marcelo faz uma avaliação completa e
            apresenta as opções mais adequadas ao seu caso — sem pressa e sem
            compromisso.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5521996269145?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Dr.%20Marcelo%20Alonso."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white !text-brand-900 hover:!bg-brand-50"
            >
              <Check size={16} />
              Agendar avaliação
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
