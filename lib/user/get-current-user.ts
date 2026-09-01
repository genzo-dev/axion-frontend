import { UserResponseDto } from "@/schemas/users/user-response-schema";
import { apiAuthenticatedRequest } from "@/utils/api-authenticated-request";

export async function getCurrentUser() {
  const res = await apiAuthenticatedRequest<UserResponseDto>("/users/me", {
    method: "GET",
    cache: "no-store",
  });

  if (!res.success) return null;

  return res.data;
}
