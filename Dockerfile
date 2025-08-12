# Stage 1: Build the admin panel and server bundle
FROM node:18-alpine AS builder
# Install build deps: sharp, image processing, git for plugins
RUN apk update \
    && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git bash \
    && rm -rf /var/cache/apk/* 
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force
RUN npm update
COPY . .
# Compile the admin and prepare production bundle
RUN npm run build

# Stage 2: Runtime image with only production deps
FROM node:18-alpine AS runner
# Only runtime libs: vips for image transformation
RUN apk add --no-cache libpng-dev vips-dev bash \
    && rm -rf /var/cache/apk/*
WORKDIR /usr/src/app
# Install only production dependencies
COPY --from=builder /usr/src/app/package.json /usr/src/app/package-lock.json ./
RUN npm ci --only=production && npm cache clean --force
# Copy built application and code
COPY --from=builder /usr/src/app ./
# Use non-root user for security
USER node
# Ensure production mode
ENV NODE_ENV=production
# Expose Strapi default port
EXPOSE 10000
# Start Strapi in production mode
CMD ["npm", "run", "start"]
