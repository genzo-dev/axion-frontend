import clsx from "clsx";
import { useId } from "react";

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<"input">;

export default function InputText({ labelText, ...props }: InputTextProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2 items-start font-dm-sans">
      {labelText && <label htmlFor={id}>{labelText}</label>}

      <input
        {...props}
        className={clsx(
          "px-4 py-2 outline-none border border-white/30 hover:border-white/80 w-full transition",
          "bg-black placeholder-[#878787] border-transparent focus:border-primary text-white caret-primary",
          "disabled:border disabled:border-white/10 disabled:bg-black disabled:cursor-not-allowed",
        )}
        id={id}
      />
    </div>
  );
}
