import clsx from "clsx";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RiProgress6Line } from "react-icons/ri";

type StatusPhaseBadgeProps = {
  status: "CONCLUIDO" | "EM ANDAMENTO" | "PLANEJADO";
  className?: string;
};

export default function StatusPhaseBadge({
  status,
  className,
}: StatusPhaseBadgeProps) {
  const baseStyle =
    "flex items-center justify-center gap-4 border w-full py-2 px-2";

  return status === "CONCLUIDO" ? (
    <label
      className={clsx(
        baseStyle,
        " border-transparent text-black bg-primary",
        className,
      )}
    >
      <FaCheck /> CONCLUÍDO
    </label>
  ) : status === "EM ANDAMENTO" ? (
    <label className={clsx(baseStyle, " border-white/10", className)}>
      <RiProgress6Line /> EM ANDAMENTO
    </label>
  ) : (
    <label className={clsx(baseStyle, " border-white/10", className)}>
      <FaCalendarAlt /> PLANEJADO
    </label>
  );
}
