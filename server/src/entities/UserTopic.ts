import "reflect-metadata";
import { Entity, Column, PrimaryColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserTopic {
  @Field()
  @PrimaryColumn()
  _id!: number;

  @Field()
  @Column("int")
  nota!: number;

  @Field()
  @Column("int")
  id_topic!: number;
}
