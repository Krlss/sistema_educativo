import express from "express";
import { ApolloServer } from "apollo-server-express";
import PingResolver from './resolvers/ping';
import {buildSchema} from 'type-graphql';
import { AsignatureResolver } from "./resolvers/AsignatureResolver";
const morgan = require('morgan');

export async function start() {
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, AsignatureResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  app.use(morgan('dev'));
  server.applyMiddleware({ app, path: "/graphql" });
  return app;
}