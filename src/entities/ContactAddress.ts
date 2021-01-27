import { Cascade, Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Contact } from './Contact';
import { Country } from './Country';
import { Label } from './Label';
import {Field, ObjectType} from "type-graphql";

@ObjectType()
@Entity({tableName: 'contact_addresses'})
export class ContactAddress {

  @Field()
  @Property({ length: 255, nullable: true })
  apartment?: string;

  @Field()
  @Property({ length: 255, nullable: true })
  building?: string;

  @Field()
  @Property({ length: 255, nullable: true })
  city?: string;

  @Field()
  @ManyToOne({ entity: () => Contact, cascade: [Cascade.ALL], index: 'contact_addresses_contact_id_fk' })
  contact!: Contact;

  @Field()
  @ManyToOne({ entity: () => Country, cascade: [], nullable: true, index: 'contact_addresses_country_id_fk' })
  country?: Country;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Field()
  @PrimaryKey({ columnType: 'bigint' })
  id!: string;

  @Field()
  @ManyToOne({ entity: () => Label, cascade: [], nullable: true, index: 'contact_addresses_label_id_fk' })
  label?: Label;

  @Field()
  @Property({ length: 255, nullable: true })
  latitude?: string;

  @Field()
  @Property({ length: 255, nullable: true })
  longitude?: string;

  @Field()
  @Property({ length: 255, nullable: true })
  street?: string;

  @Field(() => String)
  @Property({ columnType: 'timestamp', nullable: true })
  updatedAt?: Date;

}
