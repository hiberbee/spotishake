import { ApolloServer, gql } from 'apollo-server'
import { InMemoryLRUCache } from 'apollo-server-caching'
import { buildFederatedSchema } from '@apollo/federation'

const cache = new InMemoryLRUCache()

const port = process.env.NODE_PORT ?? 8080

const typeDefs = gql`
  type Query {
    _app: String!
  }
`

const resolvers = {
  Query: {
    _app: (root, args, context) => 'SpotiShake',
  },
}

const apolloServer = new ApolloServer({
  engine: {
    apiKey: process.env.APOLLO_ENGINE_KEY,
    schemaTag: process.env.NODE_ENV,
  },
  cache,
  debug: true,
  introspection: true,
  tracing: true,
  persistedQueries: { cache },
  cors: true,
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
})

apolloServer.listen(port).then(value => console.log(`Apollo Gateway started on ${value.url}`))
