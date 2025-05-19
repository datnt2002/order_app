import { ErrorHandler, HTTPResponseError } from "hono/types";
import { HTTPException } from "hono/http-exception";

export const errorHandler: ErrorHandler = (
  err: Error | HTTPResponseError,
  c
) => {
  console.error(err);
  if (err instanceof HTTPException) {
    return c.json({ status: "error", message: err.message }, err.status);
  }

  return c.json({ status: "error", message: "Internal Server Error" }, 500);
};
