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

@InputType()
class companyProfileInput {
  @Field()
  name: string;
  @Field()
  location: string;

  @Field()
  website: string;

  @Field()
  phone: string;

  @Field()
  logo: string;

  @Field()
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

  @Query(() => [CompanyProfile], { nullable: true })
  async getCompanies(): Promise<CompanyProfile[] | undefined> {
    const result = await getConnection()
      .createQueryBuilder(CompanyProfile, "companies").orderBy('id', 'DESC')
      .getMany();
  return result;
  }
}
