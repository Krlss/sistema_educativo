import "reflect-metadata";
import { Entity, Column, PrimaryColumn } from "typeorm";
import { Field,  ObjectType } from "type-graphql";
import { UserTopic } from "./UserTopic";

@ObjectType()
@Entity()
export class UserUnit {
  @PrimaryColumn()
  _id!: number;

  @Column(type=>UserTopic)
  topic!: UserTopic[];

  @Field()
  @Column("int")
  nota!: number;

  @Field()
  @Column('int')
  id_unit!: number;
}
