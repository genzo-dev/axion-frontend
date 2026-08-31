import { PublicUserDto } from "@/schemas/users/create-user-schema";
import { apiAuthenticatedRequest } from "@/utils/api-authenticated-request";

export async function getCurrentUser() {
  const res = await apiAuthenticatedRequest<PublicUserDto>("/users/me", {
    method: "GET",
    cache: "no-store",
  });

  if (!res.success) return null;

  return res.data;
}
