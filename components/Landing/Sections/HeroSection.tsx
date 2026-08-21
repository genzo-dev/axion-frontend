import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { TextLoopCustom } from "@/components/TextLoopCustom";
import clsx from "clsx";
import Image from "next/image";

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
          "absolute inset-0 flex flex-col items-center justify-center text-center gap-4 px-6 -translate-y-10",
          "text-neutral-100",
          "lg:gap-8 lg:px-20 2xl:px-72",
        )}
      >
        <div>
          <TextLoopCustom />
        </div>
        <p className="text-xs sm:text-base md:text-base xl:text-xl font-bold px-4">
          Aprenda com a comunidade, organize o que você descobre e compartilhe
          suas <span className="bg-bg-component px-2">próprias trilhas.</span>
        </p>
        <div className="flex flex-col sm:flex-row mt-4 sm:mt-0 gap-4 self-center items-center justify-center mx-auto">
          <DefaultButton
            href="/discover"
            variant="ghost"
            size="lg"
            className="px-12! font-bold"
          >
            Criar uma trilha
          </DefaultButton>
          <DefaultButton href="/discover" size="lg" className="px-12!">
            Explorar Trilhas
          </DefaultButton>
        </div>
      </div>
    </section>
  );
}
