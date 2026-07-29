import z from "zod";

export const PublicUserSchema = z.object({
  email: z.email("Informe um e-mail válido").default(""),
  username: z.string().default(""),
  name: z.string().default(""),
});

const CreateUserBase = z.object({
  email: z
    .email("Informe um e-mail válido")
    .trim()
    .nonempty("Informe seu e-mail"),
  username: z.string().trim(),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .trim()
    .nonempty("Informe sua senha"),
  confirmPassword: z.string().trim(),
  name: z
    .string()
    .min(3, "O nome deve ter mais de 2 caracteres")
    .trim()
    .nonempty("Informe seu nome"),
});

export const CreateUserSchema = CreateUserBase.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "As senhas não coinciddem",
    path: ["confirmPassword"],
  },
).transform(({ email, username, password, name }) => {
  return { email, username, password, name };
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export type PublicUserDto = z.infer<typeof PublicUserSchema>;
