import type { Context } from "hono";
import { AppError, ValidationError, ProviderError, TimeoutError, ExternalApiError } from "../utils/errors";
import { logger } from "./logging.middleware";

export function handleError(error: unknown, c: Context) {
  logger.error({ err: error }, "request failed");

  if (error instanceof ValidationError) {
    return c.json(
      {
        success: false,
        error: {
          code: error.code,
          message: error.message,
        },
      },
      error.status as 400 | 401 | 403 | 404 | 409 | 422 | 500 | 502 | 503 | 504
    );
  }

  if (error instanceof AppError) {
    return c.json(
      {
        success: false,
        error: {
          code: error.code,
          message: error.message,
        },
      },
      error.status as 400 | 401 | 403 | 404 | 409 | 422 | 500 | 502 | 503 | 504
    );
  }

  const message = error instanceof Error ? error.message : "Internal Server Error";

  return c.json(
    {
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message,
      },
    },
    500
  );
}