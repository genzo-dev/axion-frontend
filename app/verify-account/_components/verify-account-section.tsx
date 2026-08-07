"use client";

import { useActionState, useState } from "react";
import { resendValidationCodeAction } from "@/actions/auth/resend-validation-code-action";
import ResendValidationCodeForm from "@/components/Forms/auth/resend-validation-code-form";
import { FormError } from "@/components/Forms/FormError";
import ValidateAccountForm from "@/components/Forms/auth/validate-account-form";
import { validateAccountAction } from "@/actions/auth/validate-account-action";
import OtpInput from "@/components/Inputs/OtpInput";

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
      <div className="flex justify-center">
        <OtpInput lenght={6} value={code} onChange={setCode} />
      </div>

      <div>
        <FormError message={errors[0]} className="mb-4" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
