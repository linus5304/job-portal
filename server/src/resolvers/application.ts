import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
  Ctx,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Education } from "../entities/Education";
import { Job } from "./../entities/Job";
import { MyContext } from "../types/MyContext";
import { Application } from "./../entities/Application";

@Resolver()
export class ApplicationResolver {
  @Query(() => String)
  application() {
    return "new application";
  }

  @Query(() => [Job], { nullable: true })
  async getApplicantJobs(@Ctx() { req }: MyContext): Promise<Job[]> {
    const result = await getConnection().query(`
    select j.*, a.appication_date from job j 
    join application a on j.id = a."jobId" 
    where a."userId" = $1
    `, [req.session.userId])

    return result;
  }
}
