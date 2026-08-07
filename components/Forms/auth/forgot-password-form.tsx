"use client";

import { forgotPasswordAction } from "@/actions/auth/forgot-password.action";
import { DefaultButton } from "@/components/Buttons/DefaultButton";
import InputText from "@/components/Inputs/InputText";
import SpinLoader from "@/components/Loader/SpinLoader";
import { ForgotPasswordSchema } from "@/schemas/auth/forgot-password.schema";
import { useActionState } from "react";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";

export default function ForgotPasswordForm() {
  const [state, action, isPending] = useActionState(forgotPasswordAction, {
    forgotPassword: ForgotPasswordSchema.parse({}),
    errors: [],
    success: false,
  });
  return (
    <form action={action} className="w-full font-dm-sans">
      <div className="flex flex-col gap-4 font-dm-sans">
        <div>
          <InputText
            labelText="E-mail:"
            type="text"
            name="email"
            placeholder="nome@email.com"
            disabled={isPending}
            defaultValue={state.forgotPassword?.email}
          />
        </div>
        <div>
          {state.success && (
            <FormSuccess message="Um link de redefinição de senha foi enviado para o seu e-mail" />
          )}
          <FormError message={state.errors?.[0]} />
        </div>
        <div>
          <DefaultButton
            disabled={isPending}
            className="relative w-full border border-transparent"
            type="submit"
          >
            <span className={isPending ? "invisible" : "visible"}>
              Enviar link de redefinição
            </span>

            {isPending && <SpinLoader />}
          </DefaultButton>
        </div>
      </div>
    </form>
  );
}
