import z from "zod";

export const PublicLoginSchema = z.object({
  indentifier: z
    .string()
    .trim()
    .refine(
      (value) => value.length > 0,
      "Informe um e-mail ou nome de usuário (@) válido",
    )
    .default(""),
});

export const LoginSchema = z.object({
  indentifier: z
    .string()
    .trim()
    .transform((value) => value.replace(/^@+/, ""))
    .refine(
      (value) => value.length > 0,
      "Informe um e-mail ou nome de usuário (@) válido",
    ),
  password: z.string().min(1, "Informe sua senha"),
});

export type LoginDto = z.infer<typeof LoginSchema>;
export type PublicLoginDto = z.infer<typeof PublicLoginSchema>;
