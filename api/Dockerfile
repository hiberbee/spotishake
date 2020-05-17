ARG nodeVersion=14
FROM node:${nodeVersion}-alpine AS runtime
ARG env=production
ARG apolloEngineKey
ENV NODE_ENV=${env} \
    APOLLO_ENGINE_KEY=${apolloEngineKey}
ONBUILD WORKDIR /usr/local/src
ONBUILD COPY package.json yarn.lock ./

FROM runtime
ARG port=4000
ARG spotifyApiUrl=http://spotishake-spotify/graphql
ENV PORT=${port}
EXPOSE 4000
ONBUILD RUN yarn
COPY . .
RUN yarn build
ENTRYPOINT ["yarn"]
CMD ["start"]
