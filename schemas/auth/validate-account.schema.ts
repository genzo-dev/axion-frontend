import z from "zod";

export const ValidateAccountSchema = z.object({
  validateEmail: z.email("Informe um e-mail válido").default(""),
  validateCode: z
    .string()
    .min(6, "O código de validação deve ter 6 caracteres")
    .max(6, "O código de validação deve ter 6 caracteres")
    .default(""),
});

export type ValidateAccountDto = z.infer<typeof ValidateAccountSchema>;
