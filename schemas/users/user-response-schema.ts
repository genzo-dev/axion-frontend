import z from "zod";

export const UserResponseSchema = z.object({
  email: z.email("Informe um e-mail válido").default(""),
  username: z.string().default(""),
  name: z.string().default(""),
  description: z.string().default(""),
  createdAt: z.string(),
  profileImageKey: z.string().default(""),
});

export type UserResponseDto = z.infer<typeof UserResponseSchema>;
