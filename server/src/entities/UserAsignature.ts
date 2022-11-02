import "reflect-metadata";
import { Entity, Column, PrimaryColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { UserUnit } from "./UserUnit";

@ObjectType()
export class UserAsignature {
  @Field()
  @PrimaryColumn()
  _id!: number;

  @Field()
  @Column("int")
  nota!: number;

  @Field(() => [UserUnit])
  @Column(() => UserUnit)
  unit!: UserUnit[];

  @Field()
  @Column("int")
  id_asignature!: number;
}
