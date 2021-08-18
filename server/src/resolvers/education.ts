import {
  Arg, Field,
  InputType, Int, Mutation,
  Query,
  Resolver
} from "type-graphql";
import { getConnection } from "typeorm";
import { Education } from "../entities/Education";

@InputType()
class EducationInput {
  @Field({ nullable: true })
  school?: string;
  @Field({ nullable: true })
  degree?: string;
  @Field({ nullable: true })
  field?: string;
  @Field({ nullable: true })
  start_date?: string;
  @Field({ nullable: true })
  end_date?: string;
  @Field(() => Int)
  jobSeekerId: number;
}


@Resolver()
export class EducationResolver {

  @Mutation(() => Education)
  async addEducation(
    @Arg("data") data: EducationInput
  ): Promise<Education | undefined> {
    return await Education.create(data).save();
  }

  @Mutation(() => Education)
  async updateEducation(
    @Arg("data") data: EducationInput,
    @Arg("id", () => Int) id: number
  ): Promise<Education | undefined> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Education)
      .set(data)
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteEducation(@Arg("id", () => Int) id: number): Promise<Boolean> {
    await Education.delete({ id });
    return true;
  }

  @Query(() => [Education])
  async getAllEducation(@Arg("jsId", ()=> Int) jsId: number): Promise<Education[]> {
    const result = await getConnection()
      .createQueryBuilder(Education, "education")
      .where("education.jobSeekerId = :id", { id: jsId })
      .getMany();
    return result;
  }

  @Query(() => Education)
  async getEducationbyId(@Arg("id", ()=> Int) id: number): Promise<Education | undefined> {
    return await Education.findOne(id)
  }
}
