import { createRoute } from "@hono/zod-openapi";
import { AuthSchema } from "../schemas/auth.schema";

export const route = createRoute({
  method: "get",
  path: "/login",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: AuthSchema,
        },
      },
      description: "Login successful",
    },
  },
});
