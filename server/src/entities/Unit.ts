import "reflect-metadata";
import { Field, ObjectType } from "type-graphql";
import { Column, ObjectIdColumn, ObjectID } from "typeorm";
import { Topic } from "./Topic";

@ObjectType()
export class Unit {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column("string")
  name!: string;

  @Field(() => [Topic], { nullable: true })
  @Column(() => Topic)
  topic!: Topic[];

  @Field()
  @Column("string")
  asignature_name?: string;
}
