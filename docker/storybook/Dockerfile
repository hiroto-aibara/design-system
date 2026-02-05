FROM node:22-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

# Expose port
EXPOSE 6006

# HMR WebSocket設定（Docker環境用）
# docker-compose.ymlで上書き可能
ENV STORYBOOK_CLIENT_PORT=13004

# Install dependencies and start storybook
CMD ["sh", "-c", "pnpm install && cd apps/storybook && pnpm exec storybook dev -p 6006 --host 0.0.0.0 --no-open"]
