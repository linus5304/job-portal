import { User } from "src/entities/User";
import { Resolver, Mutation, ObjectType, Field } from "type-graphql";

@ObjectType()
class UserResponse{
    @Field(()=> String)
    error: string
    @Field(() => User, { nullable: true })
    user: User
}


@InputType()
class UserInput{
    @Field()
    username: string
    @Field()
    password: string
    @Field()
    email: string
    @Field()
    user_type: string
}




@Resolver()
export class UserResolver{
    @Mutation(() =>User)
    async register(@Arg('data') data: UserInput){
        const result = await getConnection().
    }

}