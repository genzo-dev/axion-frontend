import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Axion",
    template: "Axion - %s",
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
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/assets/axion-favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/assets/axion-favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/assets/axion-favicon/apple-touch-icon.png" }],
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dm_sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-dm-sans">
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
