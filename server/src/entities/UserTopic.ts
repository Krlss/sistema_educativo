import "reflect-metadata";
import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { UserQuestion } from "./UserQuestion";

@ObjectType()
export class UserTopic {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column("int")
  nota!: number;

  @Field()
  @Column("string")
  id_topic!: string;

  @Field(() => [UserQuestion], { nullable: true })
  @Column(() => UserQuestion)
  questions!: UserQuestion[];

  @Field()
  @Column("boolean")
  finished!: boolean;
}
