"use server";

import { PublicUserSchema } from "@/schemas/users/create-user-schema";
import {
  UpdateUserDto,
  UpdateUserSchema,
} from "@/schemas/users/update-user-schema";
import { apiAuthenticatedRequest } from "@/utils/api-authenticated-request";
import { asyncDelay } from "@/utils/async-delay";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type UpdateUserActionState = {
  user: UpdateUserDto;
  errors: string[];
  success: boolean;
};

export async function updateUserAction(
  state: UpdateUserActionState,
  formData: FormData,
): Promise<UpdateUserActionState> {
  if (!(formData instanceof FormData)) {
    return {
      user: state.user,
      errors: ["Dados inválidos"],
      success: false,
    };
  }

  await asyncDelay(2000);

  const formObj = Object.fromEntries(formData.entries());
  const parsedFormData = UpdateUserSchema.safeParse(formObj);

  if (!parsedFormData.success) {
    return {
      user: state.user,
      errors: getZodErrorMessages(parsedFormData.error.format()),
      success: false,
    };
  }

  const updateUserResponse = await apiAuthenticatedRequest<UpdateUserDto>(
    "/users/me",
    {
      method: "PATCH",
      body: formData,
    },
  );

  if (!updateUserResponse.success) {
    return {
      user: PublicUserSchema.parse(parsedFormData.data),
      errors: updateUserResponse.errors,
      success: updateUserResponse.success,
    };
  }

  revalidatePath("/u/me");
  revalidatePath("/", "layout");

  redirect("/u/me?section=profile");
}
