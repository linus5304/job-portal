import { MyContext } from "src/types/MyContext";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  ObjectType,
  Int,
  FieldResolver,
  Root,
} from "type-graphql";
import { CompanyProfile } from "./../entities/Company";
import { getConnection } from "typeorm";
import { Job } from "./../entities/Job";
import { JobSeeker } from "./../entities/JobSeeker";
import { Education } from "../entities/Education";

@InputType()
class JSProfileInput {
  @Field({ nullable: true })
  first_name?: string;
  @Field({ nullable: true })
  last_name?: string;
  @Field({ nullable: true })
  about_me?: string;
  @Field({ nullable: true })
  title?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  profile_pic?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field({ nullable: true })
  cv?: string;
}

@ObjectType()
export class companyDetails {
  @Field(() => CompanyProfile, { nullable: true })
  details: CompanyProfile;
  @Field(() => [Job], { nullable: true })
  jobs: Job[];
}

@Resolver(JobSeeker)
export class JobSeekerResolver {
  @Query(() => String)
  jobSeeker() {
    return "new Job seeker";
  }

  @Mutation(() => JobSeeker)
  createJSProfile(
    @Arg("data") data: JSProfileInput,
    @Ctx() { req }: MyContext
  ): Promise<JobSeeker> {
    return JobSeeker.create({
      ...data,
      userId: req.session.userId,
    }).save();
  }

  @Mutation(() => JobSeeker)
  async updateJSProfile(
    @Arg("data") data: JSProfileInput,
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<JobSeeker> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(JobSeeker)
      .set(data)
      .where('id = :id and "userId" = :userId', {
        id,
        userId: req.session.userId,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @Query(() => JobSeeker)
  async getJSProfile(
    @Ctx() { req }: MyContext
  ): Promise<JobSeeker | undefined> {
    return await JobSeeker.findOne({ where: { userId: req.session.userId } });
  }
  @Query(() => JobSeeker)
  async getJSProfileById(
    @Arg("id", () => Int, { nullable: true }) id: number
  ): Promise<JobSeeker | undefined> {
    // return await JobSeeker.findOne(id);

    return await getConnection()
      .createQueryBuilder(JobSeeker, "js")
      .leftJoinAndSelect("js.education", "edu")
      .leftJoinAndSelect("js.work_experience", "wk")
      .where("js.id = :id", { id: id })
      .getOne();
  }

  @Query(() => [JobSeeker])
  async getAllJSProfile() {
    const result = await getConnection().query(
      `
      select * from job_seeker js 
where first_name is not null and last_name is not null 
      `
    );
    return result;
  }
}
