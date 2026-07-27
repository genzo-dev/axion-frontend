import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFoundPage() {
  return (
    <div className="relative">
      <Image
        src="/images/hero-bg.png"
        alt="Axion Background Image"
        width={1920}
        height={1080}
        unoptimized
        priority
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-100 text-center gap-8 lg:gap-12 px-6 sm:px-12 lg:px-40 xl:px-60 2xl:px-128">
        <h1 className="font-dm-sans text-7xl lg:text-9xl font-extrabold text-primary">
          404
        </h1>
        <p className="font-dm-sans text-lg sm:text-2xl md:text-3xl lg:text-4xl/tight xl:text-5xl/tight font-bold">
          Sabemos que essa página deveria existir. A teoria prevê ela aqui...
        </p>
        <Link
          href="/"
          className="font-dm-sans bg-primary hover:brightness-75 px-4 lg:px-6 py-2 lg:py-3 font-bold text-black sm:text-lg transition"
        >
          Voltar para o universo conhecido
        </Link>
      </div>
    </div>
  );
}
