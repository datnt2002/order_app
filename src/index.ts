import { OpenAPIHono } from "@hono/zod-openapi";
import { route } from "./routers";

const app = new OpenAPIHono();

app.openapi(route, (c) => {
  return c.json({
    email: "",
    password: "",
  });
});

app.doc("/docs", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default app;
