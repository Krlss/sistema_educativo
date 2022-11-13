import { Field, ObjectType } from "type-graphql";
import { Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Topic } from "./Topic";

@ObjectType()
export class Unit {
  @Field()
  @PrimaryColumn()
  _id!: number;

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
