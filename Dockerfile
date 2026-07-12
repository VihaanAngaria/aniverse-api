# Use the official Bun image
FROM oven/bun:1.1.20-alpine

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the application source
COPY . .

# Set production environment
ENV NODE_ENV=production

# Start the application
CMD ["bun", "run", "start"]