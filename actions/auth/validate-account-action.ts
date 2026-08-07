"use server";

import { setTokens } from "@/lib/auth/manage-auth-cookies";
import { ResendValidationCodeDto } from "@/schemas/auth/resend-validation-code.schema";
import {
  ValidateAccountDto,
  ValidateAccountSchema,
} from "@/schemas/auth/validate-account.schema";
import { apiRequest } from "@/utils/api-request";
import { asyncDelay } from "@/utils/async-delay";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { redirect } from "next/navigation";

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

  const validateAccountResponse = await apiRequest<{
    accessToken: string;
    refreshToken: string;
  }>("/auth/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parsedFormData.data),
  });

  if (!validateAccountResponse.success) {
    return {
      validateAccount: ValidateAccountSchema.parse(parsedFormData.data),
      errors: validateAccountResponse.errors,
      success: validateAccountResponse.success,
    };
  }

  await setTokens(
    validateAccountResponse.data.accessToken,
    validateAccountResponse.data.refreshToken,
  );

  // TODO: Alterar redirect para /discover
  redirect("/verify-account");
}
