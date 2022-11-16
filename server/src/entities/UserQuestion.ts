import "reflect-metadata";
import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserQuestion {
  @Field(() => String || null)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field({ nullable: true })
  @Column("int")
  nota!: number;

  @Field({ nullable: true })
  @Column("string")
  id_question!: string;

  @Field({ nullable: true })
  @Column("boolean")
  isDone!: boolean;
}
