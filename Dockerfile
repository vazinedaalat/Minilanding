# Note: avoid `# syntax=docker/dockerfile:…` — Docker Hub 403 breaks local builds.
ARG NODE_IMAGE=node:24-alpine
ARG NGINX_IMAGE=nginxinc/nginx-unprivileged:1.27-alpine

FROM ${NODE_IMAGE} AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM ${NODE_IMAGE} AS build
WORKDIR /app
ARG VITE_APP_ENV=production
ARG VITE_APP_NAME="وزین عدالت"
ARG VITE_SITE_URL=http://localhost:8080
ENV VITE_APP_ENV=$VITE_APP_ENV \
    VITE_APP_NAME=$VITE_APP_NAME \
    VITE_SITE_URL=$VITE_SITE_URL \
    NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM ${NGINX_IMAGE}
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz >/dev/null 2>&1 || exit 1
CMD ["nginx", "-g", "daemon off;"]
