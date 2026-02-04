FROM node:22-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

# Expose port
EXPOSE 6006

# Install dependencies and start storybook (--no-open for container environment)
CMD ["sh", "-c", "pnpm install && pnpm --filter @ds/storybook dev -- --host 0.0.0.0 --no-open"]
