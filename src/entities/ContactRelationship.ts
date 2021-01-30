import { Cascade, Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Contact } from './Contact';
import { Label } from './Label';
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
@Entity({tableName: 'contact_relationships'})
export class ContactRelationship {

  @Field()
  @ManyToOne({ entity: () => Contact, cascade: [Cascade.ALL], index: 'contact_relationships_contact_id_fk' })
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
  @ManyToOne({ entity: () => Label, cascade: [Cascade.ALL], index: 'contact_relationships_label_id_fk' })
  label!: Label;

  @Field()
  @ManyToOne({ entity: () => Contact, cascade: [Cascade.ALL], index: 'contact_relationships_related_to_id_fk' })
  relatedTo!: Contact;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  updatedAt?: Date;

}
