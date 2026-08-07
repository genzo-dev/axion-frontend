import z from "zod";

const ResetPasswordBase = z.object({
  token: z.string(),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .trim()
    .nonempty("Informe sua senha"),
  confirmPassword: z.string().trim(),
});

export const ResetPasswordSchema = ResetPasswordBase.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "As senhas não coinciddem",
    path: ["confirmPassword"],
  },
).transform(({ token, password }) => {
  return { token, newPassword: password };
});

export type ResetPasswordDto = z.infer<typeof ResetPasswordSchema>;
