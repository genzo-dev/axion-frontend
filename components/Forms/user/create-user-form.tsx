"use client";

import { createUserAction } from "@/actions/users/create-user-action";
import { DefaultButton } from "@/components/Buttons/DefaultButton";
import InputText from "@/components/Inputs/InputText";
import { PublicUserSchema } from "@/schemas/users/create-user-schema";
import { useActionState, useState } from "react";
import { FormError } from "../FormError";
import DefaultLink from "@/components/Links/DefaultLink";
import SpinLoader from "@/components/Loader/SpinLoader";
import { createUsername } from "@/utils/create-username";
import Logo from "@/components/Logo";

export default function CreateUserForm() {
  const [state, action, isPending] = useActionState(createUserAction, {
    user: PublicUserSchema.parse({}),
    errors: [],
    success: false,
  });

  const [rawUsername, setRawUsername] = useState("");

  // TODO: Criar componente esqueleto de auth forms (login, register e confirm-user-email)

  return (
    <form
      action={action}
      className="flex flex-col justify-between gap-4 w-full h-full bg-black/50 border-r border-r-white/10 py-24 px-6 sm:px-12 lg:px-6 2xl:px-12 font-dm-sans"
    >
      <div className="flex flex-col gap-4">
        <div className="text-start pb-4 font-dm-sans">
          <div className="flex justify-center">
            <Logo className="mb-20 w-28! sm:w-36!" />
          </div>
          <h1 className="font-bold text-lg sm:text-xl">Cadastro</h1>
          <p className="text-sm mt-2">
            Realize seu cadastro e aproveite as melhores trilhas de estudo
          </p>
        </div>

        {/* Honeypot anti-password-manager */}
        <input
          type="password"
          aria-hidden="true"
          tabIndex={-1}
          readOnly
          className="absolute -left-[9999px] opacity-0 pointer-events-none w-0 h-0"
        />

        <InputText
          labelText="E-mail:"
          type="text"
          name="email"
          placeholder="Digite seu email..."
          disabled={isPending}
          defaultValue={state.user?.email}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InputText
            labelText="Nome:"
            type="text"
            name="name"
            placeholder="Digite seu nome..."
            disabled={isPending}
            defaultValue={state.user?.name}
            maxLength={150}
          />

          <InputText
            prefix="@"
            labelText="Username:"
            type="text"
            name="username"
            placeholder="estudante_axion"
            disabled={isPending}
            defaultValue={state.user?.username}
            maxLength={50}
            onChange={(e) => {
              setRawUsername(e.target.value);
            }}
            preview={rawUsername && `@${createUsername(rawUsername)}`}
            autoComplete="off"
          />

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

      <div className="flex items-end justify-center gap-2 pt-4 text-sm sm:text-base">
        <p>Já tem uma conta?</p>
        <DefaultLink
          href="/login"
          className="underline hover:decoration-primary text-white hover:text-white"
        >
          Faça login
        </DefaultLink>
      </div>
    </form>
  );
}
