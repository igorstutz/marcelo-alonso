import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Hospital,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import {
  contact,
  getAllProcedures,
  getProcedureBySlug,
  getProcedureImage,
  getRelatedProcedures,
} from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllProcedures().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const proc = getProcedureBySlug(params.slug);
  if (!proc) return { title: "Procedimento não encontrado" };
  return {
    title: `${proc.name} | Dr. Marcelo Alonso`,
    description: proc.description,
    openGraph: {
      title: `${proc.name} — Dr. Marcelo Alonso`,
      description: proc.description,
      type: "article",
    },
  };
}

export default function ProcedurePage({ params }: { params: Params }) {
  const proc = getProcedureBySlug(params.slug);
  if (!proc) notFound();

  const related = getRelatedProcedures(params.slug, 3);
  const heroImage = getProcedureImage(proc.slug, proc.categoryId);

  const quickInfoItems = [
    { icon: Clock, label: "Duração", value: proc.quickInfo.duration },
    { icon: Stethoscope, label: "Anestesia", value: proc.quickInfo.anesthesia },
    { icon: Hospital, label: "Internação", value: proc.quickInfo.stay },
    { icon: Sparkles, label: "Recuperação", value: proc.quickInfo.recovery },
  ];

  return (
    <>
      <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-24 bg-hero-gradient text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-900/85 to-brand-800/90" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-brand-300/10 blur-3xl" />

        <div className="container-x relative">
          <nav className="flex items-center gap-2 text-xs text-white/60 flex-wrap">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/procedimentos" className="hover:text-white">
              Procedimentos
            </Link>
            <ChevronRight size={14} />
            <Link
              href={`/procedimentos#${proc.categoryId}`}
              className="hover:text-white truncate max-w-[100px] sm:max-w-none"
            >
              {proc.categoryTitle}
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/90 truncate max-w-[120px] sm:max-w-none">
              {proc.name}
            </span>
          </nav>

          <div className="mt-6 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 lg:order-2">
              <div className="relative mx-auto aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] w-full max-w-md lg:max-w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroImage}
                  alt={proc.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-brand-200">
                    {proc.categoryTitle}
                  </div>
                  <div className="mt-1 text-base lg:text-lg font-semibold truncate">
                    {proc.name}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                  {proc.categoryTitle}
                </span>
              </div>

              <h1 className="mt-4 lg:mt-6 text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
                {proc.name}
              </h1>
              <p className="mt-4 lg:mt-6 max-w-2xl text-base lg:text-lg text-white/80">
                {proc.description}
              </p>

              <div className="mt-6 lg:mt-10 flex flex-wrap gap-3 lg:gap-4">
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-white !text-brand-900 hover:!bg-brand-50"
                >
                  Agendar avaliação
                  <ArrowRight size={16} />
                </a>
                <Link
                  href="/procedimentos"
                  className="btn-ghost border-white/30 bg-white/5 !text-white hover:!border-white/60"
                >
                  Ver todos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-14">
            <div>
              <span className="eyebrow">Sobre o procedimento</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-brand-900">
                Entenda o <span className="italic text-brand-600">{proc.name}</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-700">
                {proc.overview}
              </p>
            </div>

            <div>
              <span className="eyebrow">Indicações</span>
              <h3 className="mt-3 text-2xl font-semibold text-brand-900">
                Quando é indicado
              </h3>
              <ul className="mt-6 space-y-4">
                {proc.indications.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/60 p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 flex-shrink-0 text-brand-600"
                    />
                    <span className="text-brand-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="eyebrow">Pós-operatório</span>
              <h3 className="mt-3 text-2xl font-semibold text-brand-900">
                Recuperação e cuidados
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-brand-700">
                {proc.postOp}
              </p>
              <p className="mt-4 text-sm text-brand-500 italic">
                * Cada paciente é único. Tempos e cuidados podem variar conforme avaliação individual na consulta.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-soft">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
                  Informações rápidas
                </h3>
                <div className="mt-6 space-y-5">
                  {quickInfoItems.map((q) => (
                    <div key={q.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                        <q.icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                          {q.label}
                        </div>
                        <div className="mt-0.5 text-brand-900 font-medium">
                          {q.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-brand-950 p-8 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-600/30 blur-2xl" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold">
                    Vamos conversar?
                  </h3>
                  <p className="mt-3 text-sm text-brand-200 leading-relaxed">
                    Agende uma avaliação presencial para entender se este
                    procedimento é o caminho certo para você. A primeira
                    consulta é um momento de escuta.
                  </p>
                  <a
                    href={contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50"
                  >
                    Falar no WhatsApp
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-brand-50 relative">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="container-x relative">
            <span className="eyebrow">Veja também</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-brand-900">
              Procedimentos relacionados
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/procedimentos/${r.slug}`}
                  className="group rounded-2xl border border-brand-100 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-brand-900 pr-8">
                      {r.name}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-brand-400 transition group-hover:text-brand-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-600">
                    {r.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
