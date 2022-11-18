import "reflect-metadata";
import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { UserUnit } from "./UserUnit";

@ObjectType()
export class UserAsignature {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column("int")
  nota!: number;

  @Field(() => [UserUnit], { nullable: true })
  @Column(() => UserUnit)
  unit!: UserUnit[];

  @Field()
  @Column("string")
  id_asignature!: string;
}
