import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn, Entity,
  PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";

@Entity()
@ObjectType()
export class JobSeeker extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  about_me: string;

  @Column()
  phone: string;

  @Column()
  profile_pic: string;
  
  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
