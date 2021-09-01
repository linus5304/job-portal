import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { JobSeeker } from "./JobSeeker";

@Entity()
@ObjectType()
export class Work extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  company_name: string;

  @Field()
  @Column()
  position: string;

  @Field()
  @Column()
  field: string;

  @Field()
  @Column()
  jobSeekerId: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  start_date: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  end_date: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => JobSeeker, (jobSeeker) => jobSeeker.work_experience, {
    onDelete: "CASCADE",
  })
  jobSeeker: JobSeeker;
}
