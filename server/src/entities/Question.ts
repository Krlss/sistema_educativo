import "reflect-metadata";
import { Field, Int, ObjectType } from "type-graphql";
import { Any, Column, ObjectIdColumn, ObjectID } from "typeorm";

@ObjectType()
export class Question {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column("string")
  options!: string;

  @Field()
  @Column("string")
  title!: string;

  @Field()
  @Column("string")
  type!: string;

  @Field({ nullable: true })
  @Column("string", { nullable: true })
  subtitle?: string;
}
