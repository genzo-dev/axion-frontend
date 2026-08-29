"use client";

import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { useEffect, useState } from "react";
import SpinLoader from "@/components/Loader/SpinLoader";

type ResendValidationCodeFormProps = {
  email: string;
  action: (formData: FormData) => void;
  isPending: boolean;
};

export default function ResendValidationCodeForm({
  email,
  action,
  isPending,
}: ResendValidationCodeFormProps) {
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPending) setResendTimer(30);
  }, [isPending]);

  return (
    <form action={action} className="w-full font-dm-sans">
      <input type="hidden" name="validateEmail" readOnly defaultValue={email} />

      {/* <FormError message={state.errors[0]} /> */}

      <DefaultButton
        type="submit"
        variant="ghost"
        className="w-full"
        disabled={isPending || resendTimer > 0}
      >
        <span className={isPending ? "invisible" : "visible"}>
          {resendTimer > 0
            ? `Reenviar código em ${resendTimer}s`
            : "Reenviar código"}
        </span>

        {isPending && <SpinLoader />}
      </DefaultButton>
    </form>
  );
}
