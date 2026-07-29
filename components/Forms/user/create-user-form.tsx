"use client";

import { createUserAction } from "@/actions/users/create-user-action";
import { DefaultButton } from "@/components/Buttons/DefaultButton";
import InputText from "@/components/Inputs/InputText";
import { PublicUserSchema } from "@/schemas/users/create-user-schema";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { useActionState } from "react";
import { FormError } from "../FormError";

export default function CreateUserForm() {
  const [state, action, isPending] = useActionState(createUserAction, {
    user: PublicUserSchema.parse({}),
    errors: [],
    success: false,
  });

  return (
    <form
      action={action}
      className="flex flex-col gap-4 max-w-200 bg-bg-component border border-white/10 py-12 px-8 rounded-2xl font-dm-sans"
    >
      <div className="text-start pb-4 font-dm-sans">
        <h1 className="font-bold text-xl">Cadastre-se</h1>
        <p className="text-sm mt-2">
          Realize seu cadastro no <strong>Axion</strong> e aproveite as melhores
          trilhas de estudo
        </p>
      </div>

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
        />

        <InputText
          labelText="Username"
          type="text"
          name="username"
          placeholder="Ex.: @estudante_axion"
          disabled={isPending}
          defaultValue={state.user?.username}
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
        />
      </div>

      <FormError message={state.errors?.[0]} />
      <DefaultButton disabled={isPending} className=" w-full" type="submit">
        Cadastrar
      </DefaultButton>
    </form>
  );
}
