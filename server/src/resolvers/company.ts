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
} from "type-graphql";
import { CompanyProfile } from "./../entities/Company";
import {  getConnection } from "typeorm";
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
  @Field(() => CompanyProfile , {nullable: true})
  details: CompanyProfile;
  @Field(() => [Job], {nullable: true})
  jobs: Job[];
}

@Resolver()
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

  @Query(() => companyDetails, { nullable: true })
  async getCompanyById(
    @Arg("id", ()=> Int) id: number,
  ): Promise<companyDetails | undefined> {
    const company = await getConnection().createQueryBuilder(CompanyProfile,"company" )
      .leftJoinAndSelect("company.jobs", "jobs")
      .where("company.id = :id", { id: id })
      .orderBy("jobs.createdAt", "DESC")
      .getOne();

      console.log(company?.jobs)
      return {
        details: company as CompanyProfile,
        jobs: company?.jobs as Job[]
      }
  }

  @Query(() => [CompanyProfile], { nullable: true })
  async getCompanies(): Promise<CompanyProfile[] | undefined> {
    const result = await getConnection()
      .createQueryBuilder(CompanyProfile, "companies")
      .getMany();
    return result;
    
  }
}
