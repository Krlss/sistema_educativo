import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cookieParser from "cookie-parser";

import {
  AsignatureResolver,
  QuestionResolver,
  TopicResolver,
  UnitResolver,
} from "./resolvers/Asignature";

import {
  UserAsignatureResolver,
  UserResolver,
  UserTopicResolver,
  UserUnitResolver,
  UserQuestionResolver,
} from "./resolvers/User";

const morgan = require("morgan");

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
        UserResolver,
        UserTopicResolver,
        UserUnitResolver,
        UserQuestionResolver,
      ],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  app.use(morgan("dev"));
  app.use(cookieParser());
  server.applyMiddleware({ app, path: "/" });
  return app;
}
