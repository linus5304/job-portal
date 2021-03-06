import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn, Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn, UpdateDateColumn,
  OneToMany
} from "typeorm";
import { User } from "./User";
import { Education } from "./Education";
import {  Work } from "./Work";

@Entity()
@ObjectType()
export class JobSeeker extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({nullable: true})
  first_name: string;

  @Field({ nullable: true })
  @Column({nullable: true})
  last_name: string;

  @Field({ nullable: true })
  @Column({nullable: true})
  about_me: string;
  
  @Field({ nullable: true })
  @Column({nullable: true})
  phone: string;

  @Field({ nullable: true })
  @Column({nullable: true})
  title: string;

  @Field({ nullable: true })
  @Column({nullable: true})
  cv: string;

  @Field({ nullable: true })
  @Column({nullable: true})
  email: string;

  @Field({ nullable: true })
  @Column({nullable: true})
  profile_pic: string;

  @Field({ nullable: true })
  @Column({ unique: true })
  userId: number;
  
  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => User, { nullable: true })
  @OneToOne(() => User, (user) => user.jobSeeker, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;

  @Field(() => [Education],{nullable: true})
  @OneToMany(() => Education, (education) => education.jobSeeker)
  education: Education[];

  @Field(() => [Work],{nullable: true})
  @OneToMany(() => Work, (work_experience) => work_experience.jobSeeker)
  work_experience: Work[];
}
