import clsx from "clsx";
import { useId, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

type InputTextProps = {
  labelText?: string;
  prefix?: string;
  preview?: string;
} & React.ComponentProps<"input">;

export default function InputText({
  labelText,
  prefix,
  preview,
  ...props
}: InputTextProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const isPassword = props.type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : props.type;

  // TODO: Refatorar component

  return (
    <div className="flex flex-col gap-2 items-start font-dm-sans">
      {labelText && <label htmlFor={id}>{labelText}</label>}

      {prefix ? (
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none select-none">
            {prefix}
          </span>
          <input
            {...props}
            className={clsx(
              prefix ? "pl-8 " : "px-4",
              "py-2 outline-none border border-white/30 hover:border-white/80 w-full transition",
              "bg-black placeholder-[#878787] border-transparent focus:border-primary text-white caret-primary",
              "disabled:border disabled:border-white/10 disabled:bg-black disabled:cursor-not-allowed",
            )}
            id={id}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
          />
          {focused && preview && (
            <div className="absolute left-0 top-full mt-1 z-50 bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white/60 whitespace-nowrap shadow-lg pointer-events-none">
              Seu @ será: <span className="text-primary">{preview}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-full">
          <input
            {...props}
            type={inputType}
            className={clsx(
              prefix ? "pl-8" : "px-4",
              "py-2 outline-none border border-white/30 hover:border-white/80 w-full transition",
              "bg-black placeholder-[#878787] border-transparent focus:border-primary text-white caret-primary",
              "disabled:border disabled:border-white/10 disabled:bg-black disabled:cursor-not-allowed",
            )}
            id={id}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#878787] hover:text-white transition pointer-events-auto cursor-pointer"
              tabIndex={-1}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
