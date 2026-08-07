"use client";

import { DefaultButton } from "@/components/Buttons/DefaultButton";
import InputText from "@/components/Inputs/InputText";
import { useActionState } from "react";
import { FormError } from "../FormError";
import DefaultLink from "@/components/Links/DefaultLink";
import SpinLoader from "@/components/Loader/SpinLoader";
import Logo from "@/components/Logo";
import { loginAction } from "@/actions/auth/login.action";
import { PublicLoginSchema } from "@/schemas/auth/login.schema";

export default function LoginForm() {
  const [state, action, isPending] = useActionState(loginAction, {
    login: PublicLoginSchema.parse({}),
    errors: [],
    success: false,
  });

  // TODO: Criar componente esqueleto de auth forms (login, register e confirm-user-email)

  return (
    <form
      action={action}
      className="flex flex-col justify-between gap-4 w-full h-full bg-black py-24 px-6 sm:px-12 lg:px-6 2xl:px-12 font-dm-sans"
    >
      <div className="flex flex-col gap-4">
        <div className="text-start pb-4 font-dm-sans">
          <div className="flex justify-center">
            <Logo className="mb-20 w-28! sm:w-36!" />
          </div>
          <h1 className="font-bold text-lg sm:text-xl">Login</h1>
          <p className="text-sm mt-2">
            Bem-vindo(a) de volta! Acesse sua conta e continue seus estudos
          </p>
        </div>

        <InputText
          labelText="E-mail ou usuário:"
          type="text"
          name="indentifier"
          placeholder="nome@email.com ou @nome_de_usuario"
          disabled={isPending}
          defaultValue={state.login?.indentifier}
        />

        <InputText
          labelText="Senha:"
          type="password"
          name="password"
          placeholder="********"
          disabled={isPending}
        />

        <FormError message={state.errors?.[0]} />
        <DefaultButton
          disabled={isPending}
          className="relative w-full border border-transparent"
          type="submit"
        >
          <span className={isPending ? "invisible" : "visible"}>Cadastrar</span>

          {isPending && <SpinLoader />}
        </DefaultButton>
      </div>
      <div className="pt-4 text-sm sm:text-base">
        <div className="flex items-end justify-center gap-2">
          <p>Esqueceu a senha?</p>
          <DefaultLink
            href="/login"
            className="underline hover:decoration-primary text-white hover:text-white"
          >
            Redefinir senha
          </DefaultLink>
        </div>
        <div className="flex items-end justify-center gap-2 mt-2">
          <p>Ainda não tem uma conta?</p>
          <DefaultLink
            href="/register"
            className="underline hover:decoration-primary text-white hover:text-white"
          >
            Criar conta
          </DefaultLink>
        </div>
      </div>
    </form>
  );
}
