import {
  accessTokenExpires,
  refreshTokenExpires,
} from "@/utils/expire-time-cookies";
import { cookies } from "next/headers";

export async function setTokens(accessToken: string, refreshToken: string) {
  const cookieStore = await cookies();
  const isNonTest =
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "production";

  cookieStore.set("accessToken", accessToken, {
    httpOnly: isNonTest,
    secure: isNonTest,
    sameSite: "lax",
    expires: new Date(Date.now() + accessTokenExpires), // 15 minutes
    path: "/",
  });

  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: isNonTest,
    secure: isNonTest,
    sameSite: "lax",
    expires: new Date(Date.now() + refreshTokenExpires), // 7 days
    path: "/",
  });
}

export async function getTokens() {
  const cookieStore = await cookies();

  return {
    accessToken: cookieStore.get("accessToken")?.value || null,
    refreshToken: cookieStore.get("refreshToken")?.value || null,
  };
}

export async function clearTokens() {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
}
