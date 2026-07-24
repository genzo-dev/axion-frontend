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
    </>
  );
}
