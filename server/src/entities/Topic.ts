import "reflect-metadata";
import { Field, ObjectType } from "type-graphql";
import { Column, ObjectIdColumn, ObjectID } from "typeorm";
import { Question } from "./Question";

@ObjectType()
export class Topic {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column("string")
  name!: string;

  @Field({ nullable: true })
  @Column("string", { nullable: true })
  description?: string;

  @Field({ nullable: true })
  @Column("string")
  video!: string;

  @Field(() => [Question], { nullable: true })
  @Column((type) => Question)
  question!: Question[];
}
