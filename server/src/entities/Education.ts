import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn, Entity,
  ManyToOne,
  PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";
import { JobSeeker } from "./JobSeeker";

@Entity()
@ObjectType()
export class Education extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  school: string;

  @Field()
  @Column()
  degree: string;

  @Field()
  @Column()
  field: string;

  @Field({nullable: true})
  @Column({nullable: true})
  start_date: string;

  @Field(() => Int)
  @Column()
  jobSeekerId: number;

  @Field({nullable: true})
  @Column({nullable: true})
  end_date: string;
  
  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => JobSeeker, (jobSeeker) => jobSeeker.education)
  jobSeeker: JobSeeker;
  
}
