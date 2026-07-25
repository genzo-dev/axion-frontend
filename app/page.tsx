import AudienceSection from "@/components/Landing/Sections/AudienceSection";
import CTASection from "@/components/Landing/Sections/CTASection";
import FunctionSection from "@/components/Landing/Sections/FunctionSection";
import HeroSection from "@/components/Landing/Sections/HeroSection";
import PhasesSection from "@/components/Landing/Sections/PhasesSection";
import ProblemSection from "@/components/Landing/Sections/ProblemSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <ProblemSection />

      <FunctionSection />

      <AudienceSection />

      <CTASection />

      <PhasesSection />
    </>
  );
}
