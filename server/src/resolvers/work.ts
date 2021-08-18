import {
  Arg, Field,
  InputType, Int, Mutation,
  Query,
  Resolver
} from "type-graphql";
import { getConnection } from "typeorm";
import { Work } from "../entities/Work";

@InputType()
class WorkInput {
  @Field({ nullable: true })
  company_name?: string;
  @Field({ nullable: true })
  position?: string;
  @Field({ nullable: true })
  field?: string;
  @Field({ nullable: true })
  start_date?: string;
  @Field({ nullable: true })
  end_date?: string;
  @Field()
  jobSeekerId: number;
}


@Resolver()
export class WorkResolver {

  @Mutation(() => Work)
  async addWork(
    @Arg("data") data: WorkInput
  ): Promise<Work | undefined> {
    return await Work.create(data).save();
  }

  @Mutation(() => Work)
  async updateWork(
    @Arg("data") data: WorkInput,
    @Arg("id", () => Int) id: number
  ): Promise<Work | undefined> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Work)
      .set(data)
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteWork(@Arg("id", () => Int) id: number): Promise<Boolean> {
    await Work.delete({ id });
    return true;
  }

  @Query(() => [Work])
  async getAllWork(@Arg("jsId", ()=> Int) jsId: number): Promise<Work[]> {
    const result = await getConnection()
      .createQueryBuilder(Work, "work")
      .where("work.jobSeekerId = :id", { id: jsId })
      .getMany();
    return result;
  }

  @Query(() => Work)
  async getWorkbyId(@Arg("id", ()=> Int) id: number): Promise<Work | undefined> {
    return await Work.findOne(id)
  }
}
