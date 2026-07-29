"use client";

import clsx from "clsx";
import { FiAlertCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

type FormErrorProps = {
  message?: string | null;
  className?: string;
};

export function FormError({ message, className }: FormErrorProps) {
  return (
    message && (
      <div
        className={clsx(
          "flex items-center gap-2",
          "bg-destructive/10 border border-destructive/30",
          "px-4 py-3",
          "font-dm-sans",
          className,
        )}
      >
        <FiAlertCircle className="size-4 shrink-0 text-destructive" />
        <p className="text-destructive text-sm">{message}</p>
      </div>
    )
  );
}
