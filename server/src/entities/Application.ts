import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Job } from "./Job";
import { User } from "./User";

@Entity()
@ObjectType()
export class Application extends BaseEntity {
  @Field(() => Date)
  @CreateDateColumn() 
  appication_date: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field({ nullable: true })
  @PrimaryColumn()
  userId: number;

  // @Field(() => Int, { nullable: true })
  // @Column({ nullable: true })
  // companyId: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone: string;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.application, { onDelete: "CASCADE" })
  user: User;

  @Field({ nullable: true })
  @PrimaryColumn()
  jobId: number;

  @ManyToOne(() => Job, (job) => job.application, {
    onDelete: "CASCADE",
  })
  job: Job;
}
