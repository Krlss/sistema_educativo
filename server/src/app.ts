import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cookieParser from "cookie-parser";

import { resolvers } from "./resolvers";
import { formatError } from "./utils/formatError";

export async function start() {
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: resolvers,
    }),
    context: ({ req, res }) => ({ req, res }),
    formatError: (error) => formatError(error),
  });
  app.use(cookieParser());
  server.applyMiddleware({ app, path: "/" });
  return app;
}
