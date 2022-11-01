import "reflect-metadata";
import { Entity, Column, ObjectID, ObjectIdColumn, BaseEntity } from "typeorm";
import { Unit } from "./Unit";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Asignature {
  @Field()
  @ObjectIdColumn()
  _id!: string;

  @Field()
  @Column("string")
  name!: string;

  @Field()
  @Column("string")
  description!: string;

  @Field((type) => [Unit])
  @Column((type) => Unit)
  unit!: Unit[];
}
