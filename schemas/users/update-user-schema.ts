import z from "zod";

export const UpdateUserSchema = z.object({
  username: z.string().trim(),
  name: z.string().optional(),
  description: z.string().optional(),
  profileImage: z.instanceof(File).optional(),
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
