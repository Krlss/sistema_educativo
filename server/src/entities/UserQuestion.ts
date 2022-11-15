import "reflect-metadata";
import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserQuestion {
  @Field(() => String)
  @ObjectIdColumn()
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
