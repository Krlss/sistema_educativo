import "reflect-metadata";
import { Entity, Column, PrimaryColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { UserQuestion } from "./UserQuestion";

@ObjectType()
export class UserTopic {
  @Field()
  @PrimaryColumn()
  _id!: number;

  @Field()
  @Column("int")
  nota!: number;

  @Field()
  @Column("string")
  id_topic!: string;

  @Field(() => [UserQuestion])
  @Column(() => UserQuestion)
  questions!: UserQuestion[];

  @Field()
  @Column("boolean")
  finished!: boolean;
}
