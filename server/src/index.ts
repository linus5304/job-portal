import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";
import cors from "cors";
import connectRedis from "connect-redis";
import session from "express-session";
import { redis } from "./utils/redis";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { MyContext } from "./types/MyContext";

declare module "express-session" {
  interface Session {
    userId: number;
  }
}

const main = async () => {
  const RedisStore = connectRedis(session);

  const conn = createConnection({
    type: "postgres",
    database: "jobportal",
    username: "postgres",
    password: "toor",
    logging: true,
    synchronize: true,
    entities: [User],
  });

  const app = express();
  // app.use(
  //     cors({
  //         origin: 'https://studio.apollographql.com',
  //         credentials: true
  //     })
  // )

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "qid",
      secret: "fjlfafjal",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    } as any)
  );
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }: MyContext) => ({ req, res, redis }),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        // options
      }),
    ],
  });

  await apolloServer.start();

  app.get("/", (_, res) => {
    res.send("helo");
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("localhost:4000/graphql");
  });
};

main().catch((err) => {
  console.log(err);
});
