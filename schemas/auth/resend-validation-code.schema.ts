import z from "zod";

export const ResendValidationCodeSchema = z.object({
  validateEmail: z.email("Informe um e-mail válido").default(""),
});

export type ResendValidationCodeDto = z.infer<
  typeof ResendValidationCodeSchema
>;
