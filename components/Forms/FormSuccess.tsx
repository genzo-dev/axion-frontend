"use client";

import clsx from "clsx";
import { FiCheckCircle } from "react-icons/fi";

type FormSuccessProps = {
  message?: string | null;
  className?: string;
};

export function FormSuccess({ message, className }: FormSuccessProps) {
  return (
    message && (
      <div
        className={clsx(
          "flex items-center gap-2",
          "bg-success/10 border border-success/30",
          "px-4 py-3",
          "font-dm-sans",
          className,
        )}
      >
        <FiCheckCircle className="size-4 shrink-0 text-success" />
        <p className="text-success text-sm">{message}</p>
      </div>
    )
  );
}
