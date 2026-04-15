import Image from "next/image";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image
            src="/images/logo.png"
            alt="Dr. Marcelo Alonso"
            width={200}
            height={56}
            className="h-14 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-200">
            Cirurgia plástica com dedicação, seriedade e respeito ao paciente.
            Realize seu sonho, transforme sua vida.
          </p>
          <p className="mt-4 text-xs text-brand-300">{contact.crm}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </h4>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-brand-400 flex-shrink-0" />
              <a href={`tel:+${contact.phoneRaw}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-brand-400 flex-shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:text-white break-all">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram size={16} className="mt-0.5 text-brand-400 flex-shrink-0" />
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Endereço
          </h4>
          <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-brand-200">
            <MapPin size={16} className="mt-0.5 text-brand-400 flex-shrink-0" />
            <span>{contact.address}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-300">
          <p>© {new Date().getFullYear()} Dr. Marcelo Alonso. Todos os direitos reservados.</p>
          <p>Cirurgia Plástica — Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
}
