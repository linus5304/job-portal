import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne} from "typeorm";
import { Field, ObjectType } from 'type-graphql';
import { CompanyProfile } from './Company';

@ObjectType()
@Entity()
export class User extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({unique: true})
    username: string;

    @Field()
    @Column()
    email: string;

    @Column()
    password: string;

    @Field()
    @Column()
    user_type: string;

    @OneToOne(()=> CompanyProfile, companyProfile => companyProfile.user )
    companyProfile: CompanyProfile
}