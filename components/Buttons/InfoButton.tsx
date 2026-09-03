import clsx from "clsx";

type InfoButtonProps = {
  onClick: () => void;
  isActive: boolean;
  label: string;
  className?: string;
};

export default function InfoButton({
  onClick,
  isActive,
  label,
  className,
}: InfoButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 p-2 border border-transparent transition hover:cursor-pointer",
        isActive ? "border-b-primary bg-white/5" : "hover:bg-white/5",
        className,
      )}
    >
      {label}
    </button>
  );
}
