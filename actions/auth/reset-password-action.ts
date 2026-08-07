"use server";

import { clearTokens } from "@/lib/auth/manage-auth-cookies";
import {
  ResetPasswordDto,
  ResetPasswordSchema,
} from "@/schemas/auth/reset-password-schema";
import { apiRequest } from "@/utils/api-request";
import { asyncDelay } from "@/utils/async-delay";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { redirect } from "next/navigation";

type ResetPasswordActionState = {
  resetPassword: ResetPasswordDto;
  errors: string[];
  success: boolean;
};

export async function resetPasswordAction(
  state: ResetPasswordActionState,
  formData: FormData,
): Promise<ResetPasswordActionState> {
  if (!(formData instanceof FormData)) {
    return {
      resetPassword: state.resetPassword,
      errors: ["Dados inválidos"],
      success: false,
    };
  }

  await asyncDelay(2000);

  const formObj = Object.fromEntries(formData.entries());
  const parsedFormData = ResetPasswordSchema.safeParse(formObj);

  if (!parsedFormData.success) {
    return {
      resetPassword: state.resetPassword,
      errors: getZodErrorMessages(parsedFormData.error.format()),
      success: false,
    };
  }

  const resetPasswordResponse = await apiRequest<ResetPasswordDto>(
    "/auth/reset-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedFormData.data),
    },
  );

  await clearTokens();

  if (!resetPasswordResponse.success) {
    return {
      resetPassword: ResetPasswordSchema.parse(parsedFormData.data),
      errors: resetPasswordResponse.errors,
      success: resetPasswordResponse.success,
    };
  }

  redirect("/login");
}
