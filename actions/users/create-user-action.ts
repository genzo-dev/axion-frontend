"use server";

import {
  CreateUserDto,
  CreateUserSchema,
  PublicUserDto,
  PublicUserSchema,
} from "@/schemas/users/create-user-schema";
import { apiRequest } from "@/utils/api-request";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";

type CreateUserActionState = {
  user: PublicUserDto;
  errors: string[];
  success: boolean;
};

export async function createUserAction(
  state: CreateUserActionState,
  formData: FormData,
): Promise<CreateUserActionState> {
  if (!(formData instanceof FormData)) {
    return {
      user: state.user,
      errors: ["Dados inválidos"],
      success: false,
    };
  }

  const formObj = Object.fromEntries(formData.entries());
  const parsedFormData = CreateUserSchema.safeParse(formObj);

  if (!parsedFormData.success) {
    return {
      user: state.user,
      errors: getZodErrorMessages(parsedFormData.error.format()),
      success: false,
    };
  }

  const createUserResponse = await apiRequest<CreateUserDto>("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parsedFormData.data),
  });

  if (!createUserResponse.success) {
    return {
      user: PublicUserSchema.parse(parsedFormData.data),
      errors: createUserResponse.errors,
      success: createUserResponse.success,
    };
  }

  return {
    user: createUserResponse.data,
    errors: [],
    success: createUserResponse.success,
  };
}
