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

export default function CreateUserForm() {
  const [state, action, isPending] = useActionState(createUserAction, {
    user: PublicUserSchema.parse({}),
    errors: [],
    success: false,
  });

  const [rawUsername, setRawUsername] = useState("");

  return (
    <form
      action={action}
      className="flex flex-col gap-4 max-w-200 bg-bg-component border border-white/10 py-12 px-8 rounded-2xl font-dm-sans"
    >
      <div className="text-start pb-4 font-dm-sans">
        <h1 className="font-bold text-lg sm:text-xl">Cadastro</h1>
        <p className="text-sm mt-2">
          Realize seu cadastro no <strong>Axion</strong> e aproveite as melhores
          trilhas de estudo
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
          labelText="Username"
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
      <div className="flex items-center justify-center gap-2 pt-4">
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
