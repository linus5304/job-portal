import { Field, ObjectType } from "type-graphql";
import {
    BaseEntity, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn
} from "typeorm";
import { Job } from "./Job";
import { User } from "./User";

@Entity()
@ObjectType()
export class Application extends BaseEntity {
  @Field(() => String)
  @CreateDateColumn()
  appication_date: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, (user) => user.application)
  user: User;

  @Field()
  @PrimaryColumn()
  jobId: number;

  @ManyToOne(() => Job, (job) => job.application, {
    onDelete: "CASCADE",
  })
  job: Job;
}
