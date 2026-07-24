"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { RiArrowDropUpLine } from "react-icons/ri";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setShowButton(window.scrollY > window.innerHeight * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={clsx(
          "fixed bottom-4 right-6 z-[999] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <button
          onClick={scrollToTop}
          className={clsx(
            "font-manrope shadow-2xl border border-black bg-[#ff4f00] hover:brightness-75 cursor-pointer w-full lg:w-auto px-0.5 py-0.5 font-bold text-sm sm:text-base lg:text-sm xl:text-base text-black transition",
          )}
        >
          <RiArrowDropUpLine size={36} />
        </button>
      </div>
    </>
  );
}
