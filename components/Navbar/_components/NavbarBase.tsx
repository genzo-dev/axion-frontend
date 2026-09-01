"use client";

type NavbarBaseProps = {
  user: UserResponseDto | null;
};

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import NavbarLink from "./NavbarLink";
import MenuButton from "@/components/Buttons/MenuButton";
import Logo from "@/components/Logo";
import NavbarUnloggedLinks from "./NavbarUnloggedLinks";
import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { UserResponseDto } from "@/schemas/users/user-response-schema";
import ProfileNavButton from "@/components/Buttons/ProfileNavButton";
import Link from "next/link";
import { FiPenTool, FiPlus, FiPlusCircle, FiUser } from "react-icons/fi";
import { IoTrailSignOutline } from "react-icons/io5";
import { PiBrain, PiBrainLight } from "react-icons/pi";
import { LuBrain } from "react-icons/lu";

export default function NavbarBase({ user }: NavbarBaseProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAuthOpen, setIsMenuAuthOpen] = useState(false);
  const [showNavBg, setShowNavBg] = useState(false);
  const authMenuRef = useRef<HTMLDivElement | null>(null);
  const containerStyle = clsx("rounded-full py-2 lg:py-0");
  const navLinkMap = [
    { label: "Início", url: "/#hero" },
    { label: "Propósito", url: "/#purpose" },
    { label: "Funcionamento", url: "/#how-it-works" },
    { label: "Público", url: "/#audience" },
    { label: "Roadmap", url: "/#roadmap" },
  ];

  const navAuthLinkMap = [
    { label: "Meu Perfil", url: "/u/me", icon: <FiUser /> },
    {
      label: "Minhas Trilhas",
      url: "/u/me#trails",
      icon: <IoTrailSignOutline />,
    },
    {
      label: "Meu Aprendizado",
      url: "/u/me/learning",
      icon: <LuBrain />,
    },
    {
      label: "Criar Trilha",
      url: "/trails/create",
      icon: <FiPlus size={16} />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        authMenuRef.current &&
        !authMenuRef.current.contains(event.target as Node)
      ) {
        closeMenuAuth();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowNavBg(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    if (isMenuAuthOpen) {
      closeMenuAuth();
    }

    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenuAuth() {
    if (isMenuOpen) {
      closeMenu();
    }

    setIsMenuAuthOpen((prev) => !prev);
  }

  function closeMenuAuth() {
    setIsMenuAuthOpen(false);
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
          {user ? (
            <div className="flex items-center justify-center">
              <ProfileNavButton user={user} onClick={toggleMenuAuth} />
            </div>
          ) : (
            ""
          )}
          <div
            ref={authMenuRef}
            className={clsx(
              "fixed top-[65px] sm:top-[80px] left-0 right-0 bottom-0 bg-black p-4 flex flex-col justify-between",
              "transition-all duration-300 ease-in-out",
              isMenuOpen || isMenuAuthOpen
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
                {!isMenuAuthOpen &&
                  isMenuOpen &&
                  navLinkMap.map(({ label, url }) => (
                    <NavbarLink key={url} url={url} onClick={closeMenu}>
                      {label}
                    </NavbarLink>
                  ))}

                {isMenuAuthOpen &&
                  !isMenuOpen &&
                  navAuthLinkMap.map(({ label, url, icon }) => (
                    <NavbarLink
                      key={url}
                      url={url}
                      className="flex items-center gap-2"
                      onClick={closeMenuAuth}
                    >
                      {icon}
                      <span>{label}</span>
                    </NavbarLink>
                  ))}
              </div>
            </ul>
            <div className="flex flex-col w-full items-center gap-4">
              {user ? (
                <DefaultButton
                  variant="ghost"
                  size="sm"
                  className="w-full border-2 border-red-400! text-red-400! hover:bg-red-500 hover:border-red-500! hover:text-black!"
                  onClick={closeMenuAuth}
                >
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
        {user ? (
          <div ref={authMenuRef} className="relative">
            <ProfileNavButton user={user} onClick={toggleMenuAuth} />
            {isMenuAuthOpen && (
              <div className="absolute right-0 mt-2.5 w-64 rounded-lg bg-black shadow-lg items-end justify-end text-right text-white hidden lg:flex">
                <div className="bg-white/10 rounded-lg w-full border border-white/5">
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-col items-end justify-end gap-1 py-3 px-3 xl:px-4">
                      <label className="text-primary text-xs">
                        @{user?.username}
                      </label>{" "}
                      <br />
                      {user?.name}
                    </div>

                    <div className="w-full h-px bg-white/10"></div>

                    <div className="gap-2 w-full py-3">
                      {navAuthLinkMap.map(({ label, url, icon }) => (
                        <Link
                          key={url}
                          href={url}
                          className="text-sm flex items-center gap-2 hover:bg-amber-50/10 justify-between w-full py-2 px-3 xl:px-4"
                        >
                          {icon}
                          <span>{label}</span>
                        </Link>
                      ))}
                      <div className="px-4 mt-4">
                        <DefaultButton
                          variant="ghost"
                          size="sm"
                          className="w-full border-2 border-red-400! text-red-400! hover:bg-red-500 hover:border-red-500! hover:text-black!"
                          onClick={closeMenuAuth}
                        >
                          Sair
                        </DefaultButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <NavbarUnloggedLinks />
        )}
      </div>
    </nav>
  );
}
