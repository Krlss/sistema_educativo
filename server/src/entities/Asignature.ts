import "reflect-metadata";
import { Entity, Column, ObjectID, ObjectIdColumn, BaseEntity } from "typeorm";
import { Unit } from "./Unit";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Asignature {
  @Field()
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column("string")
  name!: string;

  @Field()
  @Column("string")
  description!: string;

  @Field(() => [Unit])
  @Column((type) => Unit)
  unit!: Unit[];
}
