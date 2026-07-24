import AudienceSection from "@/components/Landing/Sections/AudienceSection";
import FunctionSection from "@/components/Landing/Sections/FunctionSection";
import ProblemSection from "@/components/Landing/Sections/ProblemSection";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";

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

      <AudienceSection />
    </>
  );
}
