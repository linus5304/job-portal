import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Application } from "./Application";
import { User } from "./User";

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

  @Field({ nullable: true })
  @Column({ nullable: true })
  category: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  salary: string;

  @Field()
  @Column({ nullable: true })
  expDate: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({default: 'http://localhost:4000/images/HRjNq7C1.png'})
  imgUrl: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdDate: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  userId: number;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.jobs)
  user: User;

  @Field(() => [Application], { nullable: true })
  @OneToMany(() => Application, (application) => application.job)
  application: Application[];
}
