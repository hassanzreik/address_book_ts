import { Cascade, Entity, Index, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { JobTitle } from './JobTitle';
import { Label } from './Label';
import { User } from './User';
import {Field, ObjectType} from "type-graphql";
import {ParentEntity} from "./ParentEntity";

@ObjectType()
@Entity({tableName: 'contacts'})
export class Contact extends ParentEntity{

  @ManyToOne({ entity: () => User, fieldName: 'added_by', cascade: [Cascade.ALL], index: 'contacts_added_by_fk' })
  addedBy?: User;

  @Field()
  @Property({ length: 255, nullable: true })
  company?: string;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Field()
  @Index({ name: 'contacts_first_name_idx' })
  @Property({ length: 255 })
  firstName!: string;

  @Field()
  @PrimaryKey({ columnType: 'bigint' })
  id!: number;

  @Field()
  @ManyToOne({ entity: () => JobTitle, cascade: [], nullable: true, index: 'contacts_job_title_id_fk' })
  jobTitle?: JobTitle;

  @Field()
  @ManyToOne({ entity: () => Label, cascade: [], nullable: true, index: 'contacts_label_id_fk' })
  label?: Label;

  @Field()
  @Index({ name: 'contacts_last_name_idx' })
  @Property({ length: 255, nullable: true })
  lastName?: string;

  @Field()
  @Property({ length: 255, nullable: true })
  middleName?: string;

  @Field()
  @Property({ length: 4294967295, columnType: 'longtext', nullable: true })
  note?: string;

  @Field(() => String)
  @Property({ nullable: true })
  photo?: object;

  // @Field()
  @ManyToOne({ entity: () => User, cascade: [Cascade.ALL], nullable: true, index: 'contacts_user_id_fk' })
  user?: User;

}
