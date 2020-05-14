ARG nodeVersion=14
FROM node:${nodeVersion} AS runtime
WORKDIR /usr/local/src

FROM runtime AS build
COPY package.json yarn.lock ./
RUN yarn --ignore-scripts --prefer-offline --prefer-offline --frozen-lockfile
COPY . .
RUN yarn build

FROM runtime
EXPOSE 8080
COPY --from=build /usr/local/src/build .
ENTRYPOINT ["npx"]
CMD ["serve", "-l", "tcp://0.0.0.0:8080"]
