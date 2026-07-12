import type { Context } from "hono";

const OK_STATUSES = [200, 201, 202, 400, 401, 403, 404, 409, 422, 500, 502, 503, 504] as const;

type ApiStatus = (typeof OK_STATUSES)[number];

function normalizeStatus(status: number): ApiStatus {
  return OK_STATUSES.includes(status as ApiStatus)
    ? (status as ApiStatus)
    : 500;
}

export function success<T>(
  c: Context,
  data: T,
  provider = "unknown",
  status = 200
) {
  return c.json(
    {
      success: true,
      provider,
      data,
    },
    normalizeStatus(status)
  );
}

export function fail(
  c: Context,
  message: string,
  status = 500,
  code = "INTERNAL_SERVER_ERROR"
) {
  return c.json(
    {
      success: false,
      error: {
        code,
        message,
      },
    },
    normalizeStatus(status)
  );
}