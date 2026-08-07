"use client";

import { DefaultButton } from "@/components/Buttons/DefaultButton";
import InputText from "@/components/Inputs/InputText";
import SpinLoader from "@/components/Loader/SpinLoader";
import { useActionState } from "react";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { resetPasswordAction } from "@/actions/auth/reset-password-action";
import { ResetPasswordSchema } from "@/schemas/auth/reset-password-schema";

type ResetPasswordProps = {
  token: string;
};

export default function ResetPasswordForm({ token }: ResetPasswordProps) {
  const [state, action, isPending] = useActionState(resetPasswordAction, {
    resetPassword: { token: "", newPassword: "" },
    errors: [],
    success: false,
  });
  return (
    <form action={action} className="w-full font-dm-sans">
      <div className="flex flex-col gap-4 font-dm-sans">
        <div className="flex flex-col gap-4">
          <input type="hidden" name="token" value={token} />

          <InputText
            labelText="Senha:"
            type="password"
            name="password"
            placeholder="Digite sua senha..."
            disabled={isPending}
          />

          <InputText
            labelText="Confirme a senha:"
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha..."
            disabled={isPending}
            maxLength={255}
          />
        </div>
        <div>
          <FormError message={state.errors?.[0]} />
        </div>
        <div>
          <DefaultButton
            disabled={isPending}
            className="relative w-full border border-transparent"
            type="submit"
          >
            <span className={isPending ? "invisible" : "visible"}>
              Redefinir senha
            </span>

            {isPending && <SpinLoader />}
          </DefaultButton>
        </div>
      </div>
    </form>
  );
}
