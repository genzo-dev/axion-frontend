import FunctionSection from "@/components/Landing/Sections/FunctionSection";
import ProblemSection from "@/components/Landing/Sections/ProblemSection";
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

      <ProblemSection />

      <FunctionSection />

      {/* <div className="flex flex-wrap justify-center gap-4 lg:gap-12 mt-8">
          <div
            className="flex-[1_1_220px] max-w-[320px]
                  aspect-square
                  border border-white/5 bg-white/10
                  hover:bg-[#0c0c0c] hover:scale-105 transition p-4"
          >
            <h3 className="border-b-2 border-white text-lg md:text-2xl lg:text-3xl/normal text-[#ff4f00] font-manrope font-bold">
              {" "}
              1. Crie sua própria trilha{" "}
            </h3>{" "}
            <p className="text-lg py-4 font-manrope">
              {" "}
              Monte um roteiro de estudos com módulos, links e recursos. Pode
              ser um guia público para a comunidade ou seu registro pessoal
              privado.{" "}
            </p>
          </div>

          <div
            className="flex-[1_1_220px] max-w-[320px]
                  aspect-square
                  border border-white/5 bg-white/10
                  hover:bg-[#0c0c0c] hover:scale-105 transition p-4"
          >
            <h3 className="border-b-2 border-white text-lg md:text-2xl lg:text-3xl/normal text-[#ff4f00] font-manrope font-bold">
              {" "}
              2. Compartilhe conhecimento
            </h3>{" "}
            <p className="text-lg py-4 font-manrope">
              {" "}
              Publique sua trilha como guia público e ajude outros autodidatas a
              encontrar o caminho certo nos estudos.
            </p>
          </div>
          <div
            className="flex-[1_1_220px] max-w-[320px]
                  aspect-square
                  border border-white/5 bg-white/10
                  hover:bg-[#0c0c0c] hover:scale-105 transition p-4"
          >
            <h3 className="border-b-2 border-white text-lg md:text-2xl lg:text-3xl/normal text-[#ff4f00] font-manrope font-bold">
              {" "}
              3. Estude no seu ritmo
            </h3>{" "}
            <p className="text-lg py-4 font-manrope">
              {" "}
              Siga trilhas criadas pela comunidade, marque seu progresso e
              evolua nos estudos com conteúdo curado por quem entende do
              assunto.
            </p>
          </div>
        </div> */}
    </>
  );
}
