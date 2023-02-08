import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      context: ({ req, res }) => ({ req, res }),
      cors: {
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
      },
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/core/graphql/api-schema.gql'),
      playground: false,
      //introspection: process.env.NODE_ENV === 'development',
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          includeCookies: true,
        }),
      ],
    }),
  ],
})
export class GraphqlModule {}
