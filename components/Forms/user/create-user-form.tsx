"use client";

import { createUserAction } from "@/actions/users/create-user-action";
import { PublicUserSchema } from "@/schemas/users/create-user-schema";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { useActionState } from "react";

export default function CreateUserForm() {
  const [state, action, isPending] = useActionState(createUserAction, {
    user: PublicUserSchema.parse({}),
    errors: [],
    success: false,
  });

  return (
    <form action={action}>
      <input
        type="text"
        name="email"
        placeholder="Digite seu email..."
        disabled={isPending}
        defaultValue={state.user?.email}
      />

      <input
        type="text"
        name="username"
        placeholder="Ex.: @estudante_axion"
        disabled={isPending}
        defaultValue={state.user?.username}
      />

      <input
        type="text"
        name="name"
        placeholder="Digite seu name..."
        disabled={isPending}
        defaultValue={state.user?.name}
      />

      <input
        type="password"
        name="password"
        placeholder="Digite sua senha..."
        disabled={isPending}
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirme sua senha..."
        disabled={isPending}
      />

      <button type="submit">Cadastrar</button>

      {!!state?.errors && <p className="text-red-600">{state.errors[0]}</p>}
    </form>
  );
}
