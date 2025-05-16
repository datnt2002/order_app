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

export const LoginResponseSchema = z.object({
  tokens: z.object({
    accessToken: z.string().openapi({
      description: "Access token for the user",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    }),
    refreshToken: z.string().openapi({
      description: "Refresh token for the user",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    }),
  }),
  user: z.object({
    id: z.string().openapi({
      description: "ID of the user",
      example: "1234567890",
    }),
    firstName: z.string().openapi({
      description: "Name of the user",
      example: "John Doe",
    }),
    lastName: z.string().openapi({
      description: "Name of the user",
      example: "John Doe",
    }),
  }),
});
