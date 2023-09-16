#base image

FROM node:18-alpine AS base


# Install dependencies only when needed
FROM base AS deps
# Openssl is required to generate the prisma client
RUN apk add --no-cache libc6-compat openssl1.1-compat
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json as well as the prisma folder
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY prisma ./prisma/
COPY .env ./
COPY .env.production ./
COPY .npmrc ./
# Install the dependencies
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi
RUN pnpm install @prisma/client
# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma
COPY --from=deps /app/.env ./
COPY --from=deps /app/.env.production ./
COPY . .



# Disable Next Telemetry
ENV NEXT_TELEMETRY_DISABLED 1
# Generate the prisma client
RUN npx prisma generate
# Build the application
RUN npx next build && mkdir -p .next/cache/images 

# Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a user and group to run the application as non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Automatically leverage output traces to reduce image size

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Expose the port the application is running on
EXPOSE 3000
# Set the command to start the node server
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]