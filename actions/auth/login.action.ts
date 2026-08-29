"use server";

import { setTokens } from "@/lib/auth/manage-auth-cookies";
import {
  LoginDto,
  LoginSchema,
  PublicLoginDto,
  PublicLoginSchema,
} from "@/schemas/auth/login.schema";
import { apiRequest } from "@/utils/api-request";
import { asyncDelay } from "@/utils/async-delay";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { redirect } from "next/navigation";

type LoginActionState = {
  login: PublicLoginDto;
  errors: string[];
  success: boolean;
};

export async function loginAction(
  state: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  if (!(formData instanceof FormData)) {
    return {
      login: state.login,
      errors: ["Dados inválidos"],
      success: false,
    };
  }

  await asyncDelay(2000);

  const formObj = Object.fromEntries(formData.entries());
  const parsedFormData = LoginSchema.safeParse(formObj);

  if (!parsedFormData.success) {
    return {
      login: state.login,
      errors: getZodErrorMessages(parsedFormData.error.format()),
      success: false,
    };
  }

  const loginResponse = await apiRequest<{
    accessToken: string;
    refreshToken: string;
  }>("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parsedFormData.data),
  });

  if (!loginResponse.success) {
    return {
      login: PublicLoginSchema.parse(parsedFormData.data),
      errors: loginResponse.errors,
      success: loginResponse.success,
    };
  }

  await setTokens(
    loginResponse.data.accessToken,
    loginResponse.data.refreshToken,
  );

  // TODO: Alterar redirect para /discover
  redirect("/login");
}
