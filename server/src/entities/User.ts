import { Field, ObjectType } from "type-graphql";
import {
    BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn
} from "typeorm";
import { Application } from "./Application";
import { CompanyProfile } from "./Company";
import { Job } from "./Job";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @Field()
  @Column()
  user_type: string;

  @OneToOne(() => CompanyProfile, (companyProfile) => companyProfile.user)
  companyProfile: CompanyProfile;

  @OneToMany(() => Job, (job) => job.user)
  jobs: Job[];

  @OneToMany(() => Application, (application) => application.user)
  application: Application[];
}
