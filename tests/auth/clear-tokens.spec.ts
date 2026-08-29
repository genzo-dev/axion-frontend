import { clearTokens } from "@/lib/auth/manage-auth-cookies";
import { describe, expect, it, vi } from "vitest";

const { deleteMock } = vi.hoisted(() => ({
  deleteMock: vi.fn(),
}));

vi.mock("next/headers", () => ({
  cookies: async () => ({
    delete: deleteMock,
  }),
}));

describe("clearTokens", () => {
  it("should delete access and refresh tokens from cookies", async () => {
    await clearTokens();

    expect(deleteMock).toHaveBeenCalledTimes(2);
    expect(deleteMock).toHaveBeenCalledWith("accessToken");
    expect(deleteMock).toHaveBeenCalledWith("refreshToken");
  });
});
