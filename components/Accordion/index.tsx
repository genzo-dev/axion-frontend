"use client";

import clsx from "clsx";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

type AccrodionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: AccrodionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group">
      <div
        onClick={() => setOpen(!open)}
        data-cursor="pointer"
        className={clsx(
          "flex font-manrope font-bold items-center justify-between border-white/30 text-start px-4 py-4 cursor-pointer",
          open
            ? "border-t border-x text-[#ff4f00]"
            : "border text-white/70 group-hover:text-white",
        )}
      >
        <div className="relative w-4 h-4">
          <span className="absolute w-full h-0.5 bg-current top-1/2 -translate-y-1/2 transition-all duration-300" />
          <span
            className={clsx(
              "absolute w-0.5 h-full bg-current left-1/2 -translate-x-1/2 transition-all duration-300",
              open && "rotate-90 opacity-0",
            )}
          />
        </div>

        <label className="text-base">{title}</label>
      </div>
      {open && (
        <div
          className={clsx(
            "border border-white/30 border-t-0 px-4 py-4 text-start",
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
