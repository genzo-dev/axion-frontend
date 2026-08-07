import z from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.email("Informe um e-mail válido").default(""),
});

export type ForgotPasswordDto = z.infer<typeof ForgotPasswordSchema>;
