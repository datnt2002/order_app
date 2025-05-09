import { z } from "@hono/zod-openapi";

export const AuthSchema = z
  .object({
    email: z.string().email().openapi({
      description: "Email address of the user",
      example: "email@gmail.com",
    }),
    password: z.string().min(6).openapi({
      description: "Password of the user",
      example: "123456",
    }),
  })
  .openapi("Auth");
