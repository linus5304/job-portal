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
import { CompanyResolver } from "./resolvers/company";
import { CompanyProfile } from "./entities/Company";
import { Job } from "./entities/Job";
import { JobResolver } from "./resolvers/job";
import { graphqlUploadExpress } from 'graphql-upload';
import path  from 'path';
import { Application } from './entities/Application';
import { JobSeeker } from "./entities/JobSeeker";
import { Education } from "./entities/Education";
import { Work } from "./entities/Work";
import { JobSeekerResolver } from "./resolvers/jobseeker";
import { EducationResolver } from "./resolvers/education";
import { WorkResolver } from "./resolvers/work";

declare module "express-session" {
  interface Session {
    userId: number;
  }
}

const main = async () => {
  const RedisStore = connectRedis(session);

  const conn = await createConnection({
    type: "postgres",
    database: "jobportal",
    username: "postgres",
    password: "toor",
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, './migrations/*')],
    entities: [User, CompanyProfile, Job, Application, JobSeeker, Education, Work],
  });

  await conn.runMigrations()

  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

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
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver, CompanyResolver, JobResolver, JobSeekerResolver, EducationResolver, WorkResolver],
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
  app.use(express.static('public'));


  apolloServer.applyMiddleware({ app, cors: false });


  app.listen(4000, () => {
    console.log("localhost:4000/graphql");
  });
};

main().catch((err) => {
  console.log(err);
});
