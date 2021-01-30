import { Cascade, Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Contact } from './Contact';
import { Label } from './Label';
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
@Entity({tableName: 'contact_emails'})
export class ContactEmail {

  @Field()
  @ManyToOne({ entity: () => Contact, cascade: [Cascade.ALL], index: 'contact_emails_contact_id_fk' })
  contact!: Contact;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  createdAt?: Date;

  @Field()
  @Property({ length: 255 })
  email!: string;

  @Field(() => ID)
  @PrimaryKey({ columnType: 'bigint' })
  id!: number;

  @Field()
  @ManyToOne({ entity: () => Label, cascade: [], nullable: true, index: 'contact_emails_label_id_fk' })
  label?: Label;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  updatedAt?: Date;

}
