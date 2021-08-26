import { MyContext, Upload } from "../types/MyContext";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Job } from "./../entities/Job";
import { GraphQLUpload } from "graphql-upload";
import path from "path";
import { generate } from "randomstring";
import fs from "fs";
import { CompanyProfile } from "./../entities/Company";
import { Application } from "./../entities/Application";

@InputType()
class jobInput {
  @Field({ nullable: true })
  title?: string;
  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  salary?: string;

  @Field({ nullable: true })
  location?: string;

  @Field({ nullable: true })
  expDate?: string;

  @Field({ nullable: true })
  imgUrl?: string;
}
@ObjectType()
export class ImageUrl {
  @Field()
  url: string;
}

@ObjectType()
export class PaginatedJobs {
  @Field(() => [Job])
  jobs: Job[];
  @Field()
  hasMore: boolean;
}

@InputType()
export class searchInput {
  @Field({ nullable: true })
  title?: string;
  @Field({ nullable: true })
  location?: string;
}

@Resolver(Job)
export class JobResolver {
  @Query(() => String)
  job() {
    return "new job post";
  }

  @FieldResolver(() => CompanyProfile)
  async company(@Root() job: Job) {
    return await CompanyProfile.findOne(job.userId);
  }

  @FieldResolver(() => [Application])
  async applications(@Root() job: Job) {
    return await getConnection()
      .createQueryBuilder(Application, "app")
      .where('"jobId" = :jobId', { jobId: job.id })
      .getMany();
  }

  @FieldResolver(() => [Application])
  async userApplications(@Root() job: Job, @Ctx() { req }: MyContext) {
    return await getConnection()
      .createQueryBuilder(Application, "app")
      .where('"userId" = :userId', { userId: req.session.userId })
      .getMany();
  }

  @Mutation(() => ImageUrl)
  async fileUpload(
    @Arg("imgUrl", () => GraphQLUpload) { filename, createReadStream }: Upload
  ): Promise<ImageUrl> {
    const stream = createReadStream();
    const { ext } = path.parse(filename);
    const randomName = generate(8) + ext;
    const pathName = path.join(__dirname, `../../public/images/${randomName}`);
    return new Promise((resolve, reject) => {
      stream
        .pipe(fs.createWriteStream(pathName))
        .on("error", (error) => reject(error))
        .on("finish", () => {
          resolve({
            url: `http://localhost:4000/images/${randomName}`,
          });
        });
    });
  }

  @Mutation(() => Job)
  async postJob(
    @Arg("data") data: jobInput,

    @Ctx() { req }: MyContext
  ): Promise<Job> {
    return Job.create({
      ...data,
      userId: req.session.userId,
    }).save();
  }

  @Query(() => Job, { nullable: true })
  async getJobById(
    @Arg("id", () => Int!) id: number
  ): Promise<Job | undefined> {
    return await Job.findOne(id);
  }

  @Mutation(() => Job)
  async updateJob(
    @Arg("data") data: jobInput,
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<Job> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Job)
      .set(data)
      .where('id = :id and "userId" = :userId', {
        id,
        userId: req.session.userId,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteJob(
    @Arg("id", () => Int!) id: number,
    @Ctx() { req }: MyContext
  ) {
    await Job.delete({ id, userId: req.session.userId });
    return true;
  }

  @Query(() => PaginatedJobs, { nullable: true })
  async getJobs(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedJobs> {
    const realLimit = Math.min(100, limit);
    const realLimitPlusOne = realLimit + 1;
    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const jobs: Job[] = await getConnection().query(
      `
      select *
      from job j 
      ${cursor ? `where j."createdAt" < $2` : ""}
      order by j."createdAt" DESC
      limit $1
    `,
      replacements
    );
    return {
      jobs: jobs.slice(0, realLimit),
      hasMore: jobs.length === realLimitPlusOne,
    };
  }

  @Query(() => [Job], { nullable: true })
  async searchJobs(
    @Arg("input") { title, location }: searchInput
  ): Promise<Job[]> {
    const jobsQB: Job[] = await getConnection().query(
      `select * from job j 
      where j.title ilike '%'||$1||'%' 
      or j."location" ilike '%'||$2||'%'`,

      [title, location]
    );

    return jobsQB;
  }

  @Mutation(() => Application)
  apply(
    @Arg("jobId", () => Int) jobId: number,
    @Ctx() { req }: MyContext
  ): Promise<Application> {
    return Application.create({ jobId, userId: req.session.userId }).save();
  }
}
