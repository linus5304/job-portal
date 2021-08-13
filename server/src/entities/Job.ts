import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { CompanyProfile } from "./Company";

@Entity()
@ObjectType()
export class Job extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  location: string;

  @Field()
  @Column()
  category: string;

  @Field()
  @Column()
  salary: string;

  @Field()
  @Column({nullable: true})
  expDate: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  imgUrl: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  companyProfileId: number;

  @ManyToOne(() => CompanyProfile, companyProfile => companyProfile.jobs)
  companyProfile: CompanyProfile
}
