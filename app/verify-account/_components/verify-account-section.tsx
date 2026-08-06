"use client";

import { useActionState, useState } from "react";
import { resendValidationCodeAction } from "@/actions/auth/resend-validation-code-action";
import ResendValidationCodeForm from "@/components/Forms/auth/resend-validation-code-form";
import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { FormError } from "@/components/Forms/FormError";
import ValidateAccountForm from "@/components/Forms/auth/validate-account-form";
import { validateAccountAction } from "@/actions/auth/validate-account-action";
import { ValidateAccountSchema } from "@/schemas/auth/validate-account.schema";

type VerifyAccountSectionProps = {
  email: string;
};

export default function VerifyAccountSection({
  email,
}: VerifyAccountSectionProps) {
  const [resendState, resendAction, resendPending] = useActionState(
    resendValidationCodeAction,
    {
      email: "",
      errors: [],
      success: false,
    },
  );

  const [validateAccountState, validateAction, validateAccountPending] =
    useActionState(validateAccountAction, {
      validateAccount: {
        validateEmail: email,
        validateCode: "",
      },
      errors: [],
      success: false,
    });

  const errors = [...validateAccountState.errors, ...resendState.errors];
  const [code, setCode] = useState("");

  return (
    <>
      <input
        type="text"
        name="validateCode"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        inputMode="numeric"
        maxLength={6}
        placeholder="Digite o código de validação..."
        className="w-full h-12 px-4 text-center text-lg border border-white/30 bg-black text-white focus:border-primary outline-none"
      />

      <div>
        <FormError message={errors[0]} className="mb-4" />
        <div className="flex items-center justify-center gap-4">
          <ResendValidationCodeForm
            email={email}
            action={resendAction}
            isPending={resendPending}
          />
          <ValidateAccountForm
            email={email}
            code={code}
            action={validateAction}
            isPending={validateAccountPending}
          />
        </div>
      </div>
    </>
  );
}
