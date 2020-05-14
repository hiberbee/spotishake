ARG nodeVersion=14
FROM node:${nodeVersion} AS runtime
WORKDIR /usr/local/src
ONBUILD COPY yarn.lock package.json ./
ONBUILD RUN yarn --ignore-scripts --prefer-offline --frozen-lockfile --emoji=false

FROM runtime AS build
ENV NODE_ENV=production
COPY . .
RUN yarn build

FROM caddy:2
WORKDIR /var/www/html
COPY Caddyfile /etc/caddy
COPY --from=build /usr/local/src/build .
EXPOSE 8080
