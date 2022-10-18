import express from "express";
import { ApolloServer } from "apollo-server-express";
import {buildSchema} from 'type-graphql';

import {
  AsignatureResolver,
  QuestionResolver,
  TopicResolver,
  UnitResolver,
} from "./resolvers/Asignature";

import {
  UserAsignatureResolver,
  UserProgressResolver,
  UserResolver,
  UserTopicResolver,
  UserUnitResolver,
} from "./resolvers/User";

const morgan = require('morgan');

export async function start() {
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        /* Resolver Asignature */
        AsignatureResolver,
        UnitResolver,
        QuestionResolver,
        TopicResolver,
        /* Resolvers User */
        UserAsignatureResolver,
        UserProgressResolver,
        UserResolver,
        UserTopicResolver,
        UserUnitResolver,
      ],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  app.use(morgan('dev'));
  server.applyMiddleware({ app, path: "/graphql" });
  return app;
}