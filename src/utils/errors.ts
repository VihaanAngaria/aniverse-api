export class AppError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code: string,
    public readonly details?: unknown
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: unknown) {
    super(message, 400, "VALIDATION_ERROR", details);
  }
}

export class ProviderError extends AppError {
  constructor(message: string, details?: unknown) {
    super(message, 502, "PROVIDER_ERROR", details);
  }
}

export class TimeoutError extends AppError {
  constructor(message = "The upstream request timed out", details?: unknown) {
    super(message, 504, "TIMEOUT_ERROR", details);
  }
}

export class ExternalApiError extends AppError {
  constructor(message: string, details?: unknown) {
    super(message, 502, "EXTERNAL_API_ERROR", details);
  }
}
