"use client";

import { DefaultButton } from "@/components/Buttons/DefaultButton";
import SpinLoader from "@/components/Loader/SpinLoader";
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
    <form action={action} className="w-full font-dm-sans">
      <input type="hidden" name="validateEmail" readOnly value={email} />
      <input type="hidden" name="validateCode" readOnly value={code} />

      <DefaultButton type="submit" className="w-full" disabled={isPending}>
        <span
          className={
            isPending
              ? "invisible"
              : "visible flex items-center justify-center gap-2"
          }
        >
          Validar conta <MdOutlineArrowRightAlt />
        </span>

        {isPending && <SpinLoader />}
      </DefaultButton>
    </form>
  );
}
