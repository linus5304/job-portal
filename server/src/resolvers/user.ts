import { User } from "../entities/User";
import {
  Resolver,
  Mutation,
  ObjectType,
  Field,
  Arg,
  InputType,
  Ctx,
  Query,
} from "type-graphql";
import { getConnection } from "typeorm";
import argon2 from "argon2";
import { passwordValidation, validUserSchema } from "../utils/yupSchema";
import { formatYupError } from "./../utils/formatYupError";
import { MyContext } from "./../types/MyContext";
import { v4 } from "uuid";
import { FORGET_PASSWORD_PREFIX } from "../utils/constants";
import { sendEmail } from "../utils/sendEmail";
import { COOKIE_NAME } from "./../utils/constants";
import { CompanyProfile } from "./../entities/Company";
@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@InputType()
class RegisterInput {
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  email: string;
  @Field()
  user_type: string;
}
@InputType()
class LoginInput {
  @Field()
  usernameOrEmail: string;
  @Field()
  password: string;
}

@Resolver(User)
export class UserResolver {
  @Query(() => CompanyProfile)
  async getCompanyUserDetails(@Ctx() { req }: MyContext) {
    const details = await getConnection()
      .createQueryBuilder(CompanyProfile, "company")
      .where("company.userId = :userId", {userId: req.session.userId})
      .getOne()

      return details
  }

  @Mutation(() => UserResponse)
  async changePassword(
    @Arg("newPassword") newPassword: string,
    @Arg("token") token: string,
    @Ctx() { req, redis }: MyContext
  ) {
    const valid = await passwordValidation.validate(newPassword);
    if (!valid) {
      return {
        errors: [
          {
            field: "newPassword",
            message: "Password should be greater than 3 ",
          },
        ],
      };
    }

    const key = FORGET_PASSWORD_PREFIX + token;
    const userId = await redis.get(key);

    if (!userId) {
      return {
        errors: [
          {
            field: "token",
            message: "token expired",
          },
        ],
      };
    }

    const userIdNum = parseInt(userId);
    const user = await User.findOne(userIdNum);
    if (!user) {
      return {
        errors: [
          {
            field: "token",
            message: "user no longer exist",
          },
        ],
      };
    }
    User.update(
      { id: userIdNum },
      { password: await argon2.hash(newPassword) }
    );

    await redis.del(key);
    req.session!.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ) {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return true;
    }

    const token = v4();
    await redis.set(
      FORGET_PASSWORD_PREFIX + token,
      user.id,
      "ex",
      1000 * 60 * 60 * 24 * 3
    );

    await sendEmail(
      email,
      `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
    );

    return true;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    if (!req.session!.userId) {
      console.log("session id", req.session!.userId);

      return null;
    }

    const user = await User.findOne(req.session!.userId);
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("data") data: RegisterInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    try {
      await validUserSchema.validate(data, { abortEarly: false });
      const hashedPassword = await argon2.hash(data.password);

      let user;
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          email: data.email,
          password: hashedPassword,
          user_type: data.user_type,
          username: data.username,
        })
        .returning("*")
        .execute();

      user = result.raw[0];
      req.session!.userId = user.id;
      console.log("session id", req.session!.userId);
      return { user };
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [{ field: "username", message: "User name already taken" }],
        };
      }
      const errors = formatYupError(err);

      console.log(errors);
      return {
        errors,
      };
    }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("data") { usernameOrEmail, password }: LoginInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne(
      usernameOrEmail.includes("@")
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );

    if (!user) {
      return {
        errors: [
          {
            field: "login",
            message: "Login incorrect",
          },
        ],
      };
    }
    const valid = await argon2.verify(user?.password as string, password);
    if (!valid) {
      return {
        errors: [
          {
            field: "login",
            message: "Login incorrect",
          },
        ],
      };
    }

    req.session!.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
        }
        resolve(true);
      });
    });
  }
}
