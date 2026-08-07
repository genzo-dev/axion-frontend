"use server";

import {
  ForgotPasswordDto,
  ForgotPasswordSchema,
} from "@/schemas/auth/forgot-password.schema";
import { apiRequest } from "@/utils/api-request";
import { asyncDelay } from "@/utils/async-delay";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";

type ForgotPasswordActionState = {
  forgotPassword: ForgotPasswordDto;
  errors: string[];
  success: boolean;
};

export async function forgotPasswordAction(
  state: ForgotPasswordActionState,
  formData: FormData,
): Promise<ForgotPasswordActionState> {
  if (!(formData instanceof FormData)) {
    return {
      forgotPassword: state.forgotPassword,
      errors: ["Dados inválidos"],
      success: false,
    };
  }

  await asyncDelay(2000);

  const formObj = Object.fromEntries(formData.entries());
  const parsedFormData = ForgotPasswordSchema.safeParse(formObj);

  if (!parsedFormData.success) {
    return {
      forgotPassword: state.forgotPassword,
      errors: getZodErrorMessages(parsedFormData.error.format()),
      success: false,
    };
  }

  const forgotPasswordResponse = await apiRequest<ForgotPasswordDto>(
    "/auth/forgot-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedFormData.data),
    },
  );

  if (!forgotPasswordResponse.success) {
    return {
      forgotPassword: ForgotPasswordSchema.parse(parsedFormData.data),
      errors: forgotPasswordResponse.errors,
      success: forgotPasswordResponse.success,
    };
  }

  return {
    forgotPassword: ForgotPasswordSchema.parse(parsedFormData.data),
    errors: [],
    success: forgotPasswordResponse.success,
  };
}
