import { Cascade, Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Contact } from './Contact';
import { Label } from './Label';
import {Field, ID} from "type-graphql";

@Entity({tableName: 'contact_social_profiles'})
export class ContactSocialProfile {

  @Field()
  @ManyToOne({ entity: () => Contact, cascade: [Cascade.ALL], index: 'contact_social_profiles_contact_id_fk' })
  contact!: Contact;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Field(() => ID)
  @PrimaryKey({ columnType: 'bigint' })
  id!: number;

  @Field()
  @ManyToOne({ entity: () => Label, cascade: [Cascade.ALL], index: 'contact_social_profiles_label_id_fk' })
  label!: Label;

  @Field()
  @Property({ length: 255 })
  socialProfile!: string;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  updatedAt?: Date;

}
