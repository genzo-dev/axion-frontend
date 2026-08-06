"use server";

import {
  ResendValidationCodeDto,
  ResendValidationCodeSchema,
} from "@/schemas/auth/resend-validation-code.schema";
import { apiRequest } from "@/utils/api-request";
import { asyncDelay } from "@/utils/async-delay";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";

type ResendValidationCodeActionState = {
  email: string;
  errors: string[];
  success: boolean;
};

export async function resendValidationCodeAction(
  state: ResendValidationCodeActionState,
  formData: FormData,
): Promise<ResendValidationCodeActionState> {
  if (!(formData instanceof FormData)) {
    return {
      email: state.email,
      errors: ["Dados inválidos"],
      success: false,
    };
  }

  await asyncDelay(2000);

  const formObj = Object.fromEntries(formData.entries());
  const parsedFormData = ResendValidationCodeSchema.safeParse(formObj);

  if (!parsedFormData.success) {
    return {
      email: state.email,
      errors: getZodErrorMessages(parsedFormData.error.format()),
      success: false,
    };
  }

  const createUserResponse = await apiRequest<ResendValidationCodeDto>(
    "/auth/resend-code",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedFormData.data),
    },
  );

  if (!createUserResponse.success) {
    return {
      email: ResendValidationCodeSchema.parse(parsedFormData.data)
        .validateEmail,
      errors: createUserResponse.errors,
      success: createUserResponse.success,
    };
  }

  // TODO: Adicionar lógica para notificação de sucesso ou falha no envio do código

  return {
    email: ResendValidationCodeSchema.parse(parsedFormData.data).validateEmail,
    errors: [],
    success: true,
  };
}
