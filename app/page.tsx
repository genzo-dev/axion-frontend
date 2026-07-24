import Footer from "@/components/Footer";
import Card from "@/components/Landing/Card";
import AudienceSection from "@/components/Landing/Sections/AudienceSection";
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

      <section className="flex flex-col justify-center items-center py-16 gap-8 mt-24 w-full bg-[#ff4f00] font-manrope text-black">
        <h2 className="font-extrabold text-5xl">
          Pronto para começar a criar suas trilhas?
        </h2>

        <p className="text-lg">
          <strong>Obs</strong>: O Axion atualmente está em desenvolvimento
        </p>
      </section>

      {/* TODO: CRIAR ROADMAP SECTION */}
      {/* <RoadmapSection /> */}
    </>
  );
}
