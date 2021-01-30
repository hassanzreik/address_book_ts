import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import {Field, ObjectType} from "type-graphql";

@ObjectType()
@Entity({tableName: 'countries'})
export class Country {

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Field()
  @Property({ length: 30 })
  icon!: string;

  @Field()
  @PrimaryKey({ columnType: 'bigint' })
  id!: number;

  @Property({ nullable: true })
  isActive?: boolean = true;

  @Field()
  @Property({ length: 2, columnType: 'char' })
  iso!: string;

  @Property({ length: 3, columnType: 'char', nullable: true })
  iso3?: string;

  @Field()
  @Property({ length: 80 })
  name!: string;

  @Field()
  @Property({ columnType: 'smallint', nullable: true })
  numcode?: number;

  @Field()
  @Property()
  phonecode!: number;

  @Field()
  @Property({ columnType: 'text', length: 65535 })
  title!: string;

  @Property({ columnType: 'timestamp', nullable: true, defaultRaw: `CURRENT_TIMESTAMP` })
  updatedAt?: Date;

}
