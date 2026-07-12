import "dotenv/config";

export const env = {
  PORT: Number(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",

  APP_NAME: process.env.APP_NAME || "Aniverse API",
  APP_VERSION: process.env.APP_VERSION || "1.0.0",

  DEFAULT_PROVIDER: process.env.DEFAULT_PROVIDER || "hianime",
};