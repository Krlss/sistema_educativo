import { Field, Int, ObjectType } from "type-graphql";
import { Any, Column, PrimaryColumn } from "typeorm";

@ObjectType()
export class Question {
  @Field()
  @PrimaryColumn()
  _id!: number;

  @Field()
  @Column("string")
  options!: string;

  @Field()
  @Column("string")
  title!: string;

  @Field()
  @Column("string")
  type!: string;

  @Field()
  @Column("string")
  subtitle?: string;
}
