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
import { JobSeeker } from "../entities/JobSeeker";
import { Application } from "../entities/Application";

@InputType()
class companyProfileInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  website: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  logo: string;

  @Field({ nullable: true })
  founded_date: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  description: string;
}

@ObjectType()
export class companyDetails {
  @Field(() => CompanyProfile, { nullable: true })
  details: CompanyProfile;
  @Field(() => [Job], { nullable: true })
  jobs: Job[];
}

@Resolver(CompanyProfile)
export class CompanyResolver {
  @Query(() => String)
  company() {
    return "new company";
  }

  @Mutation(() => CompanyProfile)
  async createCompanyProfile(
    @Arg("data") data: companyProfileInput,
    @Ctx() { req }: MyContext
  ): Promise<CompanyProfile> {
    return CompanyProfile.create({
      ...data,
      userId: req.session.userId,
    }).save();
  }

  @Query(() => CompanyProfile)
  async getCompanyProfile(
    @Ctx() { req }: MyContext
  ): Promise<CompanyProfile | undefined> {
    return await CompanyProfile.findOne({
      where: { userId: req.session.userId },
    });
  }

  @Mutation(() => CompanyProfile)
  async updateCompanyProfile(
    @Arg("data") data: companyProfileInput,
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<CompanyProfile> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(CompanyProfile)
      .set(data)
      .where('id = :id and "userId" = :userId', {
        id,
        userId: req.session.userId,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @FieldResolver(() => [Job])
  async jobs(@Root() profile: CompanyProfile) {
    const jobs = await getConnection()
      .createQueryBuilder(Job, "job")
      .where("job.userId = :id", { id: profile.userId })
      .getMany();
    return jobs;
  }

  @Query(() => CompanyProfile, { nullable: true })
  async getCompanyById(
    @Arg("id", () => Int) id: number
  ): Promise<CompanyProfile | undefined> {
    return CompanyProfile.findOne(id);
  }

  @Query(() => [Job])
  async getCompanyJobs(@Ctx() { req }: MyContext) {
    const jobs = await getConnection()
      .createQueryBuilder(Job, "job")
      .leftJoinAndSelect("job.user", "user")
      .leftJoinAndSelect("user.companyProfile", "cp")
      .where("job.userId = :id", { id: req.session.userId })
      .getMany();
    return jobs;
  }

  @Query(() => [CompanyProfile], { nullable: true })
  async getCompanies(): Promise<CompanyProfile[] | undefined> {
    const result = await getConnection()
      .createQueryBuilder(CompanyProfile, "companies")
      .getMany();
    return result;
  }

  @Query(() => [JobSeeker], { nullable: true })
  async getCompanyJobApplicants(): Promise<JobSeeker[] | undefined> {
    const result = await getConnection()
      .createQueryBuilder(JobSeeker, "js")
      .leftJoinAndSelect('ap."jobId"', "")
      .getMany();
    return result;
  }
}
