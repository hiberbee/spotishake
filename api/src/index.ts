import { ApolloServer, gql } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'
import { InMemoryLRUCache } from 'apollo-server-caching'

const resolvers = {
  Query: {
    ping: (root, args, context) => 'pong',
  },
}

const typeDefs = gql`
  type Query {
    ping: String!
  }
`

const debug = process.env.NODE_ENV === 'development'

const apolloServer = new ApolloServer({
  engine: {
    apiKey: process.env.APOLLO_ENGINE_KEY,
    schemaTag: process.env.NODE_ENV,
  },
  debug: debug,
  tracing: debug,
  introspection: debug,
  cache: new InMemoryLRUCache(),
  cors: true,
  schema: buildFederatedSchema({ resolvers, typeDefs }),
})

apolloServer.listen(4000).then(value => console.log(`Apollo Gateway started on ${value.url}`))
