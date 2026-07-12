FROM oven/bun:1.1.20-alpine

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

EXPOSE 5000

CMD ["bun", "run", "src/index.ts"]
