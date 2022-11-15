import "reflect-metadata";
import { Entity, Column, PrimaryColumn, ObjectID } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { UserUnit } from "./UserUnit";

@ObjectType()
export class UserAsignature {
  @Field()
  @PrimaryColumn()
  _id!: ObjectID;

  @Field()
  @Column("int")
  nota!: number;

  @Field(() => [UserUnit])
  @Column(() => UserUnit)
  unit!: UserUnit[];

  @Field()
  @Column("string")
  id_asignature!: string;
}
