import { NextRequest, NextResponse } from "next/server";
import { apiRequest } from "./utils/api-request";
import { clearTokens } from "./lib/auth/manage-auth-cookies";
import {
  accessTokenExpires,
  refreshTokenExpires,
} from "./utils/expire-time-cookies";

export async function proxy(req: NextRequest) {
  const isAuthenticatedRoute = req.nextUrl.pathname.split("/").includes("me");

  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (!isAuthenticatedRoute) {
    return NextResponse.next();
  }

  if (accessToken) {
    const me = await apiRequest("/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (me.success) {
      return NextResponse.next();
    }

    if (me.status !== 401) {
      return NextResponse.next();
    }
  }

  // if (!accessToken && !refreshToken) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  if (refreshToken) {
    const newRefresh = await apiRequest<{
      accessToken: string;
      refreshToken: string;
    }>("/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (newRefresh.success) {
      const response = NextResponse.next();
      response.cookies.set("accessToken", newRefresh.data.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        expires: new Date(Date.now() + accessTokenExpires), // 15 minutes
        path: "/",
      });
      response.cookies.set("refreshToken", newRefresh.data.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        expires: new Date(Date.now() + refreshTokenExpires), // 7 days
        path: "/",
      });
      return response;
    }
  }

  const response = NextResponse.redirect(new URL("/login", req.url));

  response.cookies.delete("accessToken");
  response.cookies.delete("refreshToken");

  return response;
}

export const config = {
  matcher: ["/((?!login|register|_next|favicon.ico|imgs|images|icons).*)"], // rotas protegidas
};
