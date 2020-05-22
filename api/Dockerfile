ARG nodeVersion=14
FROM node:${nodeVersion}-alpine AS runtime
ARG env=production
ARG apolloEngineKey=""
ENV NODE_ENV=${env} \
    APOLLO_ENGINE_KEY=${apolloEngineKey}
ONBUILD WORKDIR /usr/local/src
ONBUILD COPY package.json yarn.lock ./

FROM runtime
ARG port=4000
ARG apiUrl=http://spotishake-api/graphql
ENV PORT=${port} \
    REACT_APP_API_URL=${apiUrl}
EXPOSE 4000
RUN yarn
COPY . .
RUN yarn build
ENTRYPOINT ["yarn"]
CMD ["start"]
