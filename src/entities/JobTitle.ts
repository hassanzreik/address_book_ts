import { Entity, Index, PrimaryKey, Property } from '@mikro-orm/core';
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
@Entity({tableName: 'job_titles'})
export class JobTitle {

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  createdAt?: Date;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Field(() => ID)
  @PrimaryKey({ columnType: 'bigint' })
  id!: number;

  @Field()
  @Index({ name: 'job_titles_title_idx' })
  @Property({ length: 255 })
  title!: string;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  updatedAt?: Date;

}
