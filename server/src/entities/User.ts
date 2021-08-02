import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export type userType = 'job seeker' | 'company' 

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    user_type: userType;

}