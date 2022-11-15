import "reflect-metadata";
import { Entity, Column, PrimaryColumn, ObjectID } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserQuestion {
  @Field()
  @PrimaryColumn()
  _id!: ObjectID;

  @Field()
  @Column("int")
  nota!: number;

  @Field()
  @Column("string")
  id_question!: string;

  @Field()
  @Column("boolean")
  isDone!: boolean;
}
