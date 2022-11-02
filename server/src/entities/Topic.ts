import { Field, ObjectType } from "type-graphql";
import { Column, PrimaryColumn } from "typeorm";
import { Question } from "./Question";

@ObjectType()
export class Topic {
  @Field()
  @PrimaryColumn()
  _id!: number;

  @Field()
  @Column("string")
  name!: string;

  @Field()
  @Column("string")
  description!: string;

  @Field()
  @Column("string")
  video!: string;

  @Field(() => [Question])
  @Column((type) => Question)
  question!: Question[];
}
