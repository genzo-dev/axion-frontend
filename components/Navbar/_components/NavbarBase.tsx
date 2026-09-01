"use client";

type NavbarBaseProps = {
  user: UserResponseDto | null;
};

import clsx from "clsx";
import { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";
import MenuButton from "@/components/Buttons/MenuButton";
import Logo from "@/components/Logo";
import NavbarUnloggedLinks from "./NavbarUnloggedLinks";
import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { FiUser } from "react-icons/fi";
import { UserResponseDto } from "@/schemas/users/user-response-schema";
import ProfileNavButton from "@/components/Buttons/ProfileNavButton";

export default function NavbarBase({ user }: NavbarBaseProps) {
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
        user ? "py-2" : "py-4",
        "sm:py-6 px-6 sm:px-12 lg:px-6 xl:px-12 2xl:px-40 lg:py-4",
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
        <div className="flex items-center justify-center gap-4 lg:hidden">
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          {/* TODO: Ajustar design do ícone */}
          {user ? (
            <div className="flex items-center justify-center">
              <ProfileNavButton user={user} />
            </div>
          ) : (
            ""
          )}
          <div
            className={clsx(
              "fixed top-[65px] sm:top-[80px] left-0 right-0 bottom-0 bg-black p-4 flex flex-col justify-between",
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
              {user ? (
                <DefaultButton variant="danger" className="w-full">
                  Sair
                </DefaultButton>
              ) : (
                <NavbarUnloggedLinks />
              )}
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
        {user ? <ProfileNavButton user={user} /> : <NavbarUnloggedLinks />}
      </div>
    </nav>
  );
}
