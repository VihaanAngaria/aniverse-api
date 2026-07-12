import { pino } from "pino";
import type { Context, Next } from "hono";

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  base: undefined,
});

export async function loggingMiddleware(c: Context, next: Next) {
  const started = Date.now();
  const method = c.req.method;
  const url = c.req.url;

  logger.info({ method, url }, "request");

  try {
    await next();
    logger.info({ method, url, durationMs: Date.now() - started, status: c.res.status }, "response");
  } catch (error) {
    logger.error({ err: error, method, url, durationMs: Date.now() - started }, "error");
    throw error;
  }
}
