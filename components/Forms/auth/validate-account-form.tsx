"use client";

import { DefaultButton } from "@/components/Buttons/DefaultButton";
import SpinLoader from "@/components/Loader/SpinLoader";
import clsx from "clsx";
import { MdOutlineArrowRightAlt } from "react-icons/md";

type ValidateAccountFormProps = {
  email: string;
  code: string;
  action: (formData: FormData) => void;
  isPending: boolean;
};

export default function ValidateAccountForm({
  email,
  code,
  action,
  isPending,
}: ValidateAccountFormProps) {
  return (
    <form
      action={action}
      className="w-full font-dm-sans"
      data-cy="verify-account-form"
    >
      <input type="hidden" name="validateEmail" readOnly value={email} />
      <input type="hidden" name="validateCode" readOnly value={code} />

      <DefaultButton
        type="submit"
        className="relative w-full border border-transparent"
        disabled={isPending}
      >
        <span
          className={clsx(
            "flex items-center justify-center gap-2",
            isPending && "invisible",
          )}
        >
          Verificar conta <MdOutlineArrowRightAlt />
        </span>

        {isPending && <SpinLoader />}
      </DefaultButton>
    </form>
  );
}
