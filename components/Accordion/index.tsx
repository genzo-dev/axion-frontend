"use client";

import clsx from "clsx";
import { useState } from "react";

type AccrodionProps = {
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
  titleSize?: "sm" | "base" | "lg" | "xl";
};

export default function Accordion({
  title,
  children,
  reverse = false,
  titleSize = "base",
}: AccrodionProps) {
  const [open, setOpen] = useState(false);

  const titleSizes = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-base lg:text-xl",
  };

  return (
    <div className="group">
      <div
        onClick={() => setOpen(!open)}
        data-cursor="pointer"
        className={clsx(
          "flex font-dm-sans font-bold items-center justify-between border-white/30 text-start px-4 py-4 cursor-pointer gap-4",
          open
            ? "border-t border-x text-primary"
            : "border text-white/70 group-hover:text-white",
          reverse && "flex-row-reverse",
        )}
      >
        <div className="relative w-4 h-4 shrink-0">
          <span className="absolute w-full h-0.5 bg-current top-1/2 -translate-y-1/2 transition-all duration-300" />
          <span
            className={clsx(
              "absolute w-0.5 h-full bg-current left-1/2 -translate-x-1/2 transition-all duration-300",
              open && "rotate-90 opacity-0",
            )}
          />
        </div>

        <span
          className={clsx(
            "cursor-pointer",
            titleSizes[titleSize],
            reverse ? "text-start" : "text-end",
          )}
        >
          {title}
        </span>
      </div>
      {open && (
        <div
          className={clsx(
            "border font-dm-sans border-white/30 border-t-0 px-4 py-4 text-start",
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
