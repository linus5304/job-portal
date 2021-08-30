import {
  Ctx, Query,
  Resolver
} from "type-graphql";
import { getConnection } from "typeorm";
import { MyContext } from "../types/MyContext";
import { Job } from "./../entities/Job";

@Resolver()
export class ApplicationResolver {
  @Query(() => String)
  application() {
    return "new application";
  }

  @Query(() => [Job], { nullable: true })
  async getApplicantJobs(@Ctx() { req }: MyContext): Promise<Job[]> {
    // const result = await getConnection().query(
    //   `
    // select j.*, a.appication_date from job j
    // join application a on j.id = a."jobId"
    // where a."userId" = $1
    // `,
    //   [req.session.userId]
    // );

    const jobs = await getConnection()
      .createQueryBuilder(Job, "job")
      .leftJoinAndSelect("job.application", "a")
      .leftJoinAndSelect('job.user', "u")
      .leftJoinAndSelect('u.companyProfile', "cp")
      .where('a."userId" = :id', { id: req.session.userId })
      .orderBy('job."createdAt"', "DESC")
      .getMany();

    return jobs;  
  }
}
