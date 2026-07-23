import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />

        <Image
          src="/images/hero-bg.png"
          alt="Axion Background Image"
          width={1920}
          height={1080}
          unoptimized
          priority
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-100 text-center gap-8 lg:gap-16 px-6 lg:px-20 2xl:px-72">
          <h1 className="font-manrope text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold ">
            Organize o conhecimento disperso da internet em trilhas de estudo
          </h1>
          {/* <p className="text-2xl font-bo">
            Axion é uma plataforma aberta onde autodidatas criam, compartilham e
            descobrem trilhas de aprendizado — curadas por quem realmente
            estuda.
          </p> */}

          <Link
            href="/discover"
            className="font-manrope bg-[#ff4f00] hover:brightness-75 px-4 lg:px-12 py-2 lg:py-3 font-bold text-black sm:text-lg transition"
          >
            Explorar Trilhas
          </Link>
        </div>
      </div>

      <div className="h-250 bg-neutral-100 rounded-lg -translate-y-6 -mb-6 mx-4 2xl:mx-40 rotate-1 px-4 py-2">
        <h2 className="border-b-2 border-black text-black text-4xl/relaxed font-manrope font-bold">
          Por que o Axion existe? - O dilema do autodidata.
        </h2>

        <p className="font-manrope text-black text-lg mt-4">
          Autodidatas têm disciplina para estudar, mas perdem tempo filtrando
          conteúdo duvidoso. As plataformas tradicionais são fechadas — só
          instrutores aprovados podem criar conteúdo, ignorando a inteligência
          coletiva da comunidade.
        </p>

        <p className="font-manrope text-black text-lg mt-4">
          Não existe um espaço centralizado onde aprendizes possam organizar,
          compartilhar e descobrir trilhas de estudo curadas por outros
          autodidatas como eles.
        </p>
      </div>
    </>
  );
}
