import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import {Field, ID, ObjectType} from "type-graphql";
import {ParentEntity} from "./ParentEntity";

@ObjectType()
@Entity({tableName: 'users'})
export class User extends ParentEntity{

  @Field()
  @Property({ length: 255, nullable: true })
  avatar?: string;

  @Field()
  @Unique({ name: 'users_email_unique' })
  @Property({ length: 255 })
  email!: string;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  emailVerifiedAt?: Date;

  @Field(() => ID)
  @PrimaryKey({ columnType: 'bigint' })
  id!: number;

  @Field()
  @Property({ length: 255 })
  name!: string;

  @Property({ length: 255 })
  password!: string;

  @Property({ length: 100, nullable: true })
  rememberToken?: string;

  @Field()
  accessToken?: string;
}
