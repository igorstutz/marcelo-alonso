"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact } from "@/lib/data";
import { asset } from "@/lib/asset";

const links = [
  { href: "/#sobre", label: "Quem é" },
  { href: "/procedimentos", label: "Procedimentos" },
  { href: "/#jornada", label: "Jornada" },
  { href: "/#nosso-espaco", label: "Nosso espaço" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={asset("/images/logo.png")}
            alt="Dr. Marcelo Alonso"
            width={180}
            height={48}
            priority
            className={`h-10 w-auto object-contain transition duration-300 ${
              scrolled ? "logo-dark" : ""
            }`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition ${
                scrolled
                  ? "text-brand-800 hover:text-brand-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5"
          >
            Agendar consulta
          </a>
        </nav>

        <button
          className={`lg:hidden ${scrolled ? "text-brand-900" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-brand-100 shadow-lg">
          <nav className="container-x flex flex-col py-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-brand-800 font-medium py-2"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              Agendar consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
