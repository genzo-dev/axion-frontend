import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/Buttons/ScrollToTopButton";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// TODO: ALTERAR VARIAVEL DE FONTE
const manrope = DM_Sans({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Axion",
    template: "Axion  | %s",
  },
  description:
    "Axion — plataforma aberta de trilhas de estudo. Crie, compartilhe e descubra rotas de aprendizado organizadas.",
  keywords: [
    "trilhas de estudo",
    "plataforma de estudos",
    "aprendizado autodidata",
    "roadmap de aprendizado",
    "roteiro de estudos",
    "estudar sozinho",
    "autodidata",
    "plano de estudos",
    "comunidade de aprendizado",
    "criar trilha de estudos",
    "organizar estudos",
    "aprendizagem autonoma",
  ],
  authors: [{ name: "Gabriel Enzo" }],
  openGraph: {
    title: "Axion | Plataforma de Trilhas de Estudo",
    description:
      "Axion — plataforma aberta de trilhas de estudo. Crie, compartilhe e descubra rotas de aprendizado organizadas.",
    url: "https://axion.gabrielenzo.com.br/",
    siteName: "Axion",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/axion_banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axion | Plataforma de Trilhas de Estudo",
    description: "Axion — plataforma aberta de trilhas de estudo.",
    images: ["/images/axion_banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-manrope">
        <main>
          {children}
          <Footer />
          <ScrollToTopButton />
        </main>
      </body>
    </html>
  );
}
