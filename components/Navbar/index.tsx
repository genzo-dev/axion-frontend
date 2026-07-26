"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import MenuButton from "../Buttons/MenuButton";
import NavbarLink from "./_components/NavbarLink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerStyle = clsx("rounded-full py-2");
  const navLinkMap = [
    { label: "Início", url: "#hero" },
    { label: "Propósito", url: "#purpose" },
    { label: "Funcionamento", url: "#how-it-works" },
    // { label: "Recursos", url: "#recursos" },
    { label: "Público", url: "#audience" },
    { label: "Roadmap", url: "#roadmap" },
  ];

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav
      className={clsx(
        "font-raleway fixed top-0 left-0 lg:right-10 lg:left-10 2xl:right-40 2xl:left-40 lg:top-4 lg:rounded-lg z-50 flex w-full lg:w-auto justify-between items-center",
        "py-4 sm:py-6 px-6 sm:px-12 lg:px-6 xl:px-12 2xl:px-14 lg:py-4",
        "text-white border border-white/5 lg:bg-[#0c0c0c67] lg:hover:bg-[#0c0c0c]",
        "transition-colors duration-300 z-9997",
        isMenuOpen ? "bg-black z-9997" : "bg-[#0c0c0c]",
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
              "fixed top-[65px] sm:top-[80px] left-0 right-0 bottom-0 bg-black border-t border-white/10 p-4 flex flex-col justify-between",
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
                className="font-dm-sans w-full border border-white/10 bg-transparent hover:bg-[#ff4f00] px-3 py-2 font-bold text-sm xl:text-base text-white hover:text-black transition"
              >
                Cadastrar-se
              </Link>
              <Link
                href="/login"
                className="font-dm-sans w-full border border-transparent bg-[#ff4f00] hover:brightness-75 px-3 py-2 font-bold text-sm xl:text-base text-black transition"
              >
                Entrar
              </Link>
            </div>
          </div>
        </div>

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

          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="font-dm-sans border border-white/10 bg-transparent hover:bg-[#ff4f00] px-3 py-2 font-bold text-sm xl:text-base text-white hover:text-black transition"
            >
              Cadastrar-se
            </Link>
            <Link
              href="/login"
              className="font-dm-sans border border-transparent bg-[#ff4f00] hover:brightness-75 px-3 py-2 font-bold text-sm xl:text-base text-black transition"
            >
              Entrar
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}
