import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Job } from "./Job";
import { User } from "./User";

@Entity()
@ObjectType()
export class CompanyProfile extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  location: string;

  @Field()
  @Column()
  website: string;

  @Field()
  @Column()
  phone: string;

  @Field()
  @Column()
  logo: string;

  @Field()
  @Column()
  description: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ unique: true })
  userId: number;

  @OneToOne(() => User, (user) => user.companyProfile, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;

  @OneToMany(() => Job, (job) => job.companyProfile)
  jobs: Job[];
}
