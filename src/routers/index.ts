import { createRoute } from "@hono/zod-openapi";
import { AuthSchema, LoginResponseSchema } from "../schemas/auth.schema";

export const loginRoute = createRoute({
  method: "post",
  path: "/login",
  request: {
    body: {
      content: {
        "application/json": {
          schema: AuthSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: LoginResponseSchema,
        },
      },
      description: "Login successful",
    },
  },
});
