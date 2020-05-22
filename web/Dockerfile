ARG nodeVersion=14
FROM node:${nodeVersion}-alpine AS runtime
WORKDIR /usr/local/src
COPY yarn.lock package.json ./
ARG env=production
ENV NODE_ENV=${env}
RUN yarn
COPY . .
RUN yarn build

FROM runtime
WORKDIR /var/www/html
COPY Caddyfile /etc/caddy
COPY --from=runtime /usr/local/src/build .
EXPOSE 8080
