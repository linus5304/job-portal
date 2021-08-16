import { Field } from "type-graphql";
import {
  Column,
  CreateDateColumn, Entity,
  PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";

@Entity()
export class JobSeeker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  website: string;

  @Column()
  phone: string;

  @Column()
  logo: string;

  @Column()
  description: string;
  
  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
