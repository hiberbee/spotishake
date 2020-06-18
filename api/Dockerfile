ARG nodeVersion=14
FROM node:${nodeVersion}-alpine AS node-base

FROM node-base AS build
WORKDIR /usr/local/src
ARG env=production
ARG apolloEngineKey=""
ENV NODE_ENV=${env} \
    ENGINE_API_KEY=${apolloEngineKey}
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node-base
WORKDIR /usr/local/src
COPY --from=build /usr/local/src .
EXPOSE 4000 8000
ENTRYPOINT ["yarn"]
CMD ["fake"]
