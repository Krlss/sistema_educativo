import { Field, ObjectType } from "type-graphql";
import { Column, PrimaryColumn, ObjectID } from "typeorm";
import { Question } from "./Question";

@ObjectType()
export class Topic {
  @Field()
  @PrimaryColumn()
  _id!: ObjectID;

  @Field()
  @Column("string")
  name!: string;

  @Field({ nullable: true })
  @Column("string", { nullable: true })
  description?: string;

  @Field()
  @Column("string")
  video!: string;

  @Field(() => [Question])
  @Column((type) => Question)
  question!: Question[];
}
