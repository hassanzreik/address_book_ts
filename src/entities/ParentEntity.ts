import {Field, ObjectType} from "type-graphql";
import {Property} from "@mikro-orm/core";

@ObjectType()
export class ParentEntity{



    @Field(() => String)
    @Property({type: 'date', columnType: 'timestamp', nullable: true })
    createdAt? = new Date();

    @Field(() => String)
    @Property({type:'date', columnType: 'timestamp', nullable: true })
    updatedAt? = new Date();

}