"use client";

import { useActionState } from "react";
import { resendValidationCodeAction } from "@/actions/auth/resend-validation-code-action";
import ResendValidationCodeForm from "@/components/Forms/auth/resend-validation-code-form";
import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { FormError } from "@/components/Forms/FormError";

type VerifyAccountSectionProps = {
  email: string;
};

export default function VerifyAccountSection({
  email,
}: VerifyAccountSectionProps) {
  const [verifyState, verifyAction, verifyPending] = useActionState(
    resendValidationCodeAction,
    {
      email: "",
      errors: [],
      success: false,
    },
  );

  const errors = [...verifyState.errors];

  return (
    <div>
      <FormError message={errors[0]} className="mb-4" />
      <div className="flex items-center justify-center gap-4">
        <ResendValidationCodeForm
          email={email}
          action={verifyAction}
          isPending={verifyPending}
        />
        <DefaultButton className="w-full">Verificar Conta </DefaultButton>
      </div>
    </div>
  );
}
