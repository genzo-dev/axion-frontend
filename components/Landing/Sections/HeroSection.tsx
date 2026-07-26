import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { TextLoopCustom } from "@/components/TextLoopCustom";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Md10K } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="relative">
      <Image
        src="/images/hero-bg.png"
        alt="Axion Background Image"
        width={1920}
        height={1080}
        unoptimized
        priority
        className="w-full h-screen object-cover"
      />
      <div
        id="hero"
        className={clsx(
          "absolute inset-0 flex flex-col items-center justify-center text-center gap-8 px-6",
          "text-neutral-100",
          "lg:gap-16 lg:px-20 2xl:px-72",
        )}
      >
        <TextLoopCustom />
        <DefaultButton href="/discover" size="lg" className="px-12!">
          Explorar Trilhas
        </DefaultButton>
      </div>
    </section>
  );
}
