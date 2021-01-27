import {Query, Resolver, Ctx} from "type-graphql";
import {User} from "../entities/User";
import {MyContext} from "../types";

@Resolver()
export class UserResolver{
    @Query(() => [User])
    users( @Ctx() {em}: MyContext): Promise<User[]>{
        return em.find(User, {});
    }

}