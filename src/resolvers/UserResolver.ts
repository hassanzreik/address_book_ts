import {
    Resolver,
    Mutation,
    Arg,
    InputType,
    Field,
    Ctx,
    ObjectType,
} from "type-graphql";
import { MyContext } from "../types";
import { User } from "../entities/User";
import * as argon2 from "argon2";


@InputType()
class RegisterInput {
    @Field()
    name: string;

    @Field()
    email: string;
    @Field()
    password: string;
}
@InputType()
class LoginInput {
    @Field()
    email: string;
    @Field()
    password: string;
}

@ObjectType()
class FieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => User, { nullable: true })
    user?: User;
}

@Resolver()
export class UserResolver {
    @Mutation(() => UserResponse)
    async register(
        @Arg("options") options: RegisterInput,
        @Ctx() { em }: MyContext
    ): Promise<UserResponse> {
        if (options.email.length <= 2) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "length must be greater than 2",
                    },
                ],
            };
        }

        if (options.password.length <= 2) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "length must be greater than 2",
                    },
                ],
            };
        }

        options.password = await argon2.hash(options.password);
        const user = em.create(User, options);
        try {
            await em.persistAndFlush(user);
        } catch (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "email already taken",
                        },
                    ],
                };
            }
        }
        return { user };
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg("options") options: LoginInput,
        @Ctx() { em }: MyContext
    ): Promise<UserResponse> {
        const user = await em.findOne(User, { email: options.email });

        if (!user) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "that email doesn't exist",
                    },
                ],
            };
        }

        const valid = await argon2.verify(user.password, options.password);

        if (!valid) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "incorrect password",
                    },
                ],
            };
        }

        return {
            user,
        };
    }
}