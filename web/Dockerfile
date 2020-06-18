ARG nodeVersion=14
FROM node:${nodeVersion}-alpine AS node-base

FROM node-base AS build
WORKDIR /usr/local/src
ARG env=production
ARG apiUrl=https://api.spotishake.me/graphql
ARG webUrl=https://spotishake.me
ARG spotifyClientId=53335a27cd9a4fc8ae055cdec0ed3852
ENV NODE_ENV=${env} \
    REACT_APP_API_URL=${apiUrl} \
    REACT_APP_PUBLIC_URL=${webUrl} \
    REACT_APP_SPOTIFY_CLIENT_ID=${spotifyClientId}
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node-base
WORKDIR /usr/local/src
COPY --from=build /usr/local/src/build .
EXPOSE 3000
ENTRYPOINT ["npx"]
CMD ["serve", "-l", "3000"]
