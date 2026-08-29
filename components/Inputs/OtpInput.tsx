"use client";

import { useRef } from "react";

type OtpInputProps = {
  lenght: number;
  value: string;
  onChange: (value: string) => void;
};

export default function OtpInput({ lenght, value, onChange }: OtpInputProps) {
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (char: string, index: number) => {
    const digit = char.replace(/\D/g, "");
    if (!digit) return;

    onChange(value.slice(0, index) + digit + value.slice(index + 1));

    if (index < lenght - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key !== "Backspace") return;

    e.preventDefault();
    if (value[index]) {
      onChange(value.slice(0, index) + value.slice(index + 1));
    } else if (index > 0) {
      inputRef.current[index - 1]?.focus();
      onChange(value.slice(0, index - 1) + value.slice(index));
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, lenght);
    onChange(pasteData);
  };

  return (
    <div className="gap-2 sm:gap-4 flex justify-center">
      {Array.from({ length: lenght }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRef.current[index] = el;
          }}
          data-cy={`otp-input-${index}`}
          type="text"
          value={value[index] || ""}
          onChange={(e) => handleChange(e.target.value, index)}
          onPaste={handlePaste}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}
          className="w-10 sm:w-12 h-10 sm:h-12 text-center text-lg border border-white/30 bg-black text-white focus:border-primary outline-none"
        />
      ))}
    </div>
  );
}
