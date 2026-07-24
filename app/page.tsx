import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Card from "@/components/Landing/Card";
import AudienceSection from "@/components/Landing/Sections/AudienceSection";
import CTASection from "@/components/Landing/Sections/CTASection";
import FunctionSection from "@/components/Landing/Sections/FunctionSection";
import HeroSection from "@/components/Landing/Sections/HeroSection";
import ProblemSection from "@/components/Landing/Sections/ProblemSection";
import Navbar from "@/components/Navbar";
import { TextLoopCustom } from "@/components/TextLoopCustom";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <ProblemSection />

      <FunctionSection />

      <AudienceSection />

      <CTASection />

      {/* TODO: CRIAR ROADMAP SECTION */}
      {/* <RoadmapSection /> */}

      <section className="px-6 sm:px-12 lg:px-10 2xl:px-40">
        <div className="flex flex-col items-start py-12 lg:max-w-1/2 font-manrope">
          <h2 className="text-xl sm:text-2xl md:text-3xl/relaxed font-bold font-manrope md:text-center md:pt-12">
            Para quem é o Axion?
          </h2>
          <p>Feito por autodidatas, para autodidatas</p>
          {/* <p>
          Feito por autodidatas, para autodidatas — uma plataforma construída
          por quem estuda de verdade, para quem estuda de verdade.
          </p> */}
        </div>

        <Accordion title="Teste">ESTOU TESTANDO ESSA PRAGA!!</Accordion>
      </section>
    </>
  );
}
