import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Marcelo Alonso — Cirurgia Plástica | Rio de Janeiro",
  description:
    "Dr. Marcelo Alonso, cirurgião plástico membro da SBCP. Procedimentos faciais, corporais, reparadores e minimamente invasivos na Barra da Tijuca, Rio de Janeiro.",
  keywords: [
    "cirurgia plástica",
    "Rio de Janeiro",
    "Barra da Tijuca",
    "Dr. Marcelo Alonso",
    "rinoplastia",
    "lipoaspiração",
    "abdominoplastia",
    "prótese mamária",
  ],
  openGraph: {
    title: "Dr. Marcelo Alonso — Cirurgia Plástica",
    description:
      "Realize seu sonho, transforme sua vida. Cirurgia plástica com dedicação, seriedade e respeito.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
