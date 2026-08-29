"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import MenuButton from "../Buttons/MenuButton";
import NavbarLink from "./_components/NavbarLink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavBg, setShowNavBg] = useState(false);
  const containerStyle = clsx("rounded-full py-2 lg:py-0");
  const navLinkMap = [
    { label: "Início", url: "/#hero" },
    { label: "Propósito", url: "/#purpose" },
    { label: "Funcionamento", url: "/#how-it-works" },
    { label: "Público", url: "/#audience" },
    { label: "Roadmap", url: "/#roadmap" },
  ];

  useEffect(() => {
    const handleScroll = () => setShowNavBg(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav
      className={clsx(
        "font-raleway fixed top-0 left-0 z-50 flex w-full justify-between items-center",
        "py-4 sm:py-6 px-6 sm:px-12 lg:px-6 xl:px-12 2xl:px-40 lg:py-4",
        "text-white border-b",
        showNavBg
          ? "lg:bg-black border-b-bg-component"
          : "lg:bg-transparent border-b-transparent",
        "transition-colors duration-300 z-9997",
        isMenuOpen ? "bg-black z-9997" : "bg-black",
      )}
    >
      <div className={containerStyle}>
        <Logo />
      </div>
      <div className={containerStyle}>
        <div className="lg:hidden">
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />

          <div
            className={clsx(
              "fixed top-[65px] sm:top-[80px] left-0 right-0 bottom-0 bg-black  p-4 flex flex-col justify-between",
              "transition-all duration-300 ease-in-out",
              isMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-5 pointer-events-none",
            )}
          >
            <ul
              className={clsx(
                "flex flex-col items-center justify-center gap-2",
                "text-xs sm:text-lg md:text-xl font-bold",
              )}
            >
              <div className="flex flex-col items-start justify-between w-full gap-2">
                {navLinkMap.map(({ label, url }) => (
                  <NavbarLink key={url} url={url} onClick={closeMenu}>
                    {label}
                  </NavbarLink>
                ))}
              </div>
            </ul>
            <div className="flex flex-col w-full items-center gap-4">
              <Link
                href="/register"
                className="font-dm-sans w-full border border-white/10 bg-transparent hover:bg-primary px-3 py-2 font-bold text-sm xl:text-base text-white hover:text-black transition"
              >
                Cadastrar-se
              </Link>
              <Link
                href="/login"
                className="font-dm-sans w-full border border-transparent bg-primary hover:brightness-75 px-3 py-2 font-bold text-sm xl:text-base text-black transition"
              >
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
        <ul
          className={clsx(
            "items-center justify-center gap-2 hidden lg:flex",
            "text-xs sm:text-lg md:text-xl font-bold",
          )}
        >
          {navLinkMap.map(({ label, url }) => (
            <NavbarLink key={url} url={url}>
              {label}
            </NavbarLink>
          ))}
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/register"
          className="font-dm-sans border border-white/10 hover:border-white/20 bg-transparent brightness-90 hover:brightness-125 px-3 py-1.5 text-sm font-medium xl:text-base text-white  transition"
        >
          Cadastrar-se
        </Link>
        <Link
          href="/login"
          className="font-dm-sans border border-transparent bg-primary hover:brightness-75 px-3 py-1.5 text-sm font-medium xl:text-base text-black transition"
        >
          Entrar
        </Link>
      </div>
    </nav>
  );
}
