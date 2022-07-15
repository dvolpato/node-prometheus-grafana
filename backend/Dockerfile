FROM node:16 AS dev
WORKDIR /app
ARG APP_VERSION=dev
COPY ./package.json ./package-lock.json ./.env ./tsconfig.json ./
RUN npm ci
COPY ./src ./src
RUN npm run build
EXPOSE 3000
CMD ["node", "--require=dotenv/config", "dist/index.js"]

FROM node:16-alpine as dist
ARG APP_NAME
ENV APP_NAME=$APP_NAME
ARG APP_VERSION
ENV APP_VERSION=$APP_VERSION
COPY ./package.json ./package-lock.json ./
RUN npm ci --only=production --ignore-scripts
COPY --from=dev /app/dist ./dist
CMD ["node", "--unhandled-rejections=strict", "dist/index.js"]