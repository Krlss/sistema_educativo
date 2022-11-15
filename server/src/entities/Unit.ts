import "reflect-metadata";
import { Field, ObjectType } from "type-graphql";
import {
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  ObjectID,
} from "typeorm";
import { Topic } from "./Topic";

@ObjectType()
export class Unit {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column("string")
  name!: string;

  @Field(() => [Topic])
  @Column(() => Topic)
  topic!: Topic[];

  @Field()
  @Column("string")
  asignature_name?: string;
}
