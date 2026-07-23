"use client";

import MenuButton from "@/components/Buttons/MenuButton";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* <nav className="flex justify-between fixed w-full border border-white/5 bg-white/10 md:bg-white/5 md:hover:bg-white/15  px-6 py-4 md:rounded-lg z-20 transition">
          <div>
            <Image
              src="/images/axion.svg"
              alt="Axion Background Image"
              width={434}
              height={89}
              className="w-20 hover:cursor-pointer transition"
            />
          </div>

          <div>
            <MenuButton onClick={() => console.log("CLICOU")} isOpen={true} />
          </div>
        </nav> */}

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
            className="bg-[#ff4f00] hover:brightness-75 px-4 lg:px-6 py-2 lg:py-3 font-bold text-black sm:text-lg transition"
          >
            Explorar Trilhas
          </Link>
        </div>
      </div>

      {/* <img src="/images/hero-bg.png" className="w-full h-screen object-cover" /> */}

      <div className="h-200 bg-neutral-100 rounded-lg -translate-y-6 -mb-6 mx-4 2xl:mx-40 rotate-1"></div>
    </>
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}
