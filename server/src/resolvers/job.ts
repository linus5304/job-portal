import { MyContext, Upload } from "../types/MyContext";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Job } from "./../entities/Job";
import {
  GraphQLUpload,
} from "graphql-upload";
import path from "path";
import { generate } from "randomstring";
import fs from "fs";

@InputType()
class jobInput {
  @Field()
  title: string;
  @Field()
  category: string;

  @Field()
  description: string;

  @Field()
  salary: string;

  @Field()
  location: string;

  @Field()
  expDate: string;

  @Field()
  imgUrl: string;
}
@ObjectType()
export class ImageUrl {
  @Field()
  url: string;
}

@ObjectType()
export class PaginatedJobs{
  @Field(() => [Job])
  jobs: Job[]
  @Field()
  hasMore: boolean
}


@Resolver()
export class JobResolver {
  @Query(() => String)
  job() {
    return "new job post";
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
      companyProfileId: req.session.userId,
    }).save();
  }

  @Query(() => Job, { nullable: true })
  async getJobById(@Arg("id") id: number): Promise<Job | undefined> {
    return await Job.findOne(id);
  }

  @Query(() => PaginatedJobs, { nullable: true })
  async getJobs(
    @Arg('limit', () =>Int) limit: number,
    @Arg('cursor', () =>String, {nullable: true}) cursor: string | null,
  ): Promise<PaginatedJobs> {
    const realLimit = Math.min(100, limit)
    const realLimitPlusOne = realLimit + 1
    const replacements: any[] = [realLimitPlusOne]

    if(cursor){
      replacements.push(new Date(parseInt(cursor)))
    }

    const jobs: Job[] = await getConnection().query(`
      select j.*
      from job j
      ${cursor ? `where j."createdAt" < $2` : ''}
      order by j."createdAt" DESC
      limit $1
    `,replacements) 
    // return await getConnection()
    //   .createQueryBuilder(Job, "jobs")
    //   .orderBy("jobs.createdAt", "DESC")
    //   .getMany();
    return {
      jobs: jobs.slice(0, realLimit),
      hasMore: jobs.length === realLimitPlusOne
    }
  }
}
