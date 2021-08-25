import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity, Column,
  CreateDateColumn, Entity, JoinColumn,
  OneToOne, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";
import { User } from "./User";

@Entity()
@ObjectType()
export class CompanyProfile extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({nullable: true})
  @Column({nullable: true})
  name: string;

  @Field({nullable: true})
  @Column({nullable: true})
  location: string;

  @Field({nullable: true})
  @Column({nullable: true})
  website: string;

  @Field({nullable: true})
  @Column({nullable: true})
  phone: string;

  @Field({nullable: true})
  @Column({nullable: true})
  logo: string;

  @Field({nullable: true})
  @Column({nullable: true})
  founded_date: string;

  @Field({nullable: true})
  @Column({nullable: true})
  email: string;

  @Field({nullable: true})
  @Column({nullable: true})
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
}
