FROM node:22-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

# Expose port
EXPOSE 5173

# Install dependencies and start dev server
CMD ["sh", "-c", "pnpm install && pnpm --filter demo-app dev --host 0.0.0.0"]
