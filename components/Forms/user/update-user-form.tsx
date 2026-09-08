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
import { UpdateUserSchema } from "@/schemas/users/update-user-schema";
import { updateUserAction } from "@/actions/users/update-user-action";

type User = {
  email: string;
  username: string;
  name: string;
  description: string;
  createdAt: string;
  profileImageKey: string;
};

type Props = {
  user: User;
};

export default function UpdateUserForm({ user }: Props) {
  const [state, action, isPending] = useActionState(updateUserAction, {
    user: {
      username: user.username,
      name: user.name,
      description: user.description,
    },
    errors: [],
    success: false,
  });

  const [rawUsername, setRawUsername] = useState("");

  // TODO: Criar componente esqueleto de auth forms (login, register e confirm-user-email)

  return (
    <form
      action={action}
      className="flex flex-col justify-center gap-4 w-full h-full bg-black border-r border-r-white/10 py-24 px-6 sm:px-12 lg:px-6 2xl:px-12 font-dm-sans"
    >
      <div className="flex flex-col gap-4 bg-white/5 border border-white/10 px-12 py-12 rounded-lg">
        <div className="text-start pb-4 font-dm-sans">
          {/* <div className="flex justify-center">
            <Logo className="mb-20 w-28! sm:w-36!" />
          </div> */}
          <h1 className="font-bold text-lg sm:text-xl">Cadastro</h1>
          <p className="text-sm mt-2">
            Realize seu cadastro e aproveite as melhores trilhas de estudo
          </p>
        </div>

        {/* Honeypot anti-password-manager */}

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

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
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
            labelText="Descrição:"
            type="text"
            name="description"
            placeholder="Crie sua descrição"
            defaultValue={state.user?.description}
            disabled={isPending}
          />

          <input
            type="file"
            name="profileImage"
            accept="image/*"
            disabled={isPending}
          />
        </div>
        <FormError message={state.errors?.[0]} />
        <DefaultButton
          disabled={isPending}
          className="relative w-full border border-transparent"
          type="submit"
        >
          <span className={isPending ? "invisible" : "visible"}>
            Atualizar perfil
          </span>

          {isPending && <SpinLoader />}
        </DefaultButton>
      </div>

      <div className="flex items-end justify-center gap-2 pt-4 text-sm sm:text-base">
        {/* <strong></strong> */}
      </div>
    </form>
  );
}
