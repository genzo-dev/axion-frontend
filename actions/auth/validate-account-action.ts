"use server";

import { ResendValidationCodeDto } from "@/schemas/auth/resend-validation-code.schema";
import {
  ValidateAccountDto,
  ValidateAccountSchema,
} from "@/schemas/auth/validate-account.schema";
import { apiRequest } from "@/utils/api-request";
import { asyncDelay } from "@/utils/async-delay";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";

type ValidateAccountActionState = {
  validateAccount: ValidateAccountDto;
  errors: string[];
  success: boolean;
};

export async function validateAccountAction(
  state: ValidateAccountActionState,
  formData: FormData,
): Promise<ValidateAccountActionState> {
  if (!(formData instanceof FormData)) {
    return {
      validateAccount: state.validateAccount,
      errors: ["Dados inválidos"],
      success: false,
    };
  }

  await asyncDelay(2000);

  const formObj = Object.fromEntries(formData.entries());
  const parsedFormData = ValidateAccountSchema.safeParse(formObj);

  if (!parsedFormData.success) {
    return {
      validateAccount: state.validateAccount,
      errors: getZodErrorMessages(parsedFormData.error.format()),
      success: false,
    };
  }

  const createUserResponse = await apiRequest<ResendValidationCodeDto>(
    "/auth/verify",
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
      validateAccount: ValidateAccountSchema.parse(parsedFormData.data),
      errors: createUserResponse.errors,
      success: createUserResponse.success,
    };
  }

  // TODO: Adicionar lógica para notificação de sucesso ou falha no envio do código

  return {
    validateAccount: ValidateAccountSchema.parse(parsedFormData.data),
    errors: [],
    success: true,
  };
}
