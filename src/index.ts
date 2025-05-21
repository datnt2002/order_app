import { OpenAPIHono } from "@hono/zod-openapi";
import { initializeRedis } from "./libs/redisInit";
import { loginRoute } from "./routers";
import { loginService } from "./services/auth.service";

const app = new OpenAPIHono();

async function bootstrap() {
  // Define routes only after Redis is ready
  app.openapi(loginRoute, async (c) => {
    const { email, password } = await c.req.json();
    const response = await loginService(email, password);
    return c.json(response);
  });

  app.doc("/docs", {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "My API",
    },
  });
}

Promise.all([initializeRedis()])
  .then(() => bootstrap())
  .catch((err) => {
    console.error("Error initializing application:", err);
    process.exit(1);
  });

export default app;
