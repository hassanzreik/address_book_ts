import {Arg, Ctx, Int, Mutation, Query, Resolver} from "type-graphql";
import {Contact} from "../entities/Contact";
import {MyContext} from "../types";

@Resolver()
export class ContactResolver{
    @Query(() => [Contact])
    contacts( @Ctx() {em}: MyContext): Promise<Contact[]>{
        return em.find(Contact, {});
    }

    @Query(() => Contact, {nullable: true})
    contact(
        @Arg('id') id: number,
        @Ctx() {em}:MyContext
    ): Promise<Contact | null>{
        return em.findOne(Contact, { id });
    }

    @Mutation(() => Contact)
    async createContact(
        @Arg('firstName') firstName : string,
        @Ctx() {em}:MyContext
    ): Promise<Contact>{
        const contact = em.create(Contact, {firstName})
        await em.persistAndFlush(contact);
        return contact;
    }

    @Mutation(() => Contact, {nullable: true})
    async updateContact(
        @Arg('id') id : number,
        @Arg('firstName', ()=> String, {nullable: true}) firstName : string,
        @Ctx() {em}:MyContext
    ): Promise<Contact | null>{
        const contact = em.findOne(Contact, { id });

        if(!contact){
            return null;
        }

        if(typeof firstName !== 'undefined') {
            contact.firstName = firstName;
            await em.persistAndFlush(contact);
        }
        return contact;
    }

}