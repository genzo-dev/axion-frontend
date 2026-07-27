import { FaCalendarAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RiProgress6Line } from "react-icons/ri";

type StatusPhaseBadgeProps = {
  status: "CONCLUIDO" | "EM ANDAMENTO" | "PLANEJADO";
};

export default function StatusPhaseBadge({ status }: StatusPhaseBadgeProps) {
  return status === "CONCLUIDO" ? (
    <label className="flex items-center justify-center gap-4 border border-transparent text-black w-full py-2 px-2 bg-primary">
      <FaCheck /> CONCLUÍDO
    </label>
  ) : status === "EM ANDAMENTO" ? (
    <label className="flex items-center justify-center gap-4 border border-white/10  w-full py-2 px-2 bg-black">
      <RiProgress6Line /> EM ANDAMENTO
    </label>
  ) : (
    <label className="flex items-center justify-center gap-4 border border-white/10  w-full py-2 px-2 bg-black">
      <FaCalendarAlt /> PLANEJADO
    </label>
  );
}
