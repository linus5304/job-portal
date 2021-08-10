import { MyContext } from "src/types/MyContext";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { CompanyProfile } from "./../entities/Company";
import { getConnection } from 'typeorm';

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

  @Query(() => CompanyProfile, {nullable: true})
  async getCompanyById(@Arg('id')id: number):Promise<CompanyProfile | undefined>{
    return await CompanyProfile.findOne(id)
  }

  @Query(() => [CompanyProfile], {nullable: true})
  async getAllCompanys():Promise<CompanyProfile[] | undefined>{
    const result = await getConnection().createQueryBuilder(CompanyProfile,'companies').getMany()
    return result
  }


}
