import { Entity, Index, PrimaryKey, Property } from '@mikro-orm/core';
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
@Entity({tableName: 'labels'})
export class Label {

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Field(() => ID)
  @PrimaryKey({ columnType: 'bigint' })
  id!: number;

  @Field()
  @Property({ columnType: 'enum' })
  labelType!: string;

  @Field()
  @Index({ name: 'labels_title_idx' })
  @Property({ length: 255 })
  title!: string;

  @Property({ columnType: 'timestamp', nullable: true })
  updatedAt?: Date;

}
