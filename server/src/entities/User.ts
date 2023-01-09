import "reflect-metadata";
import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { UserAsignature } from "./UserAsignature";
import { UserTopic } from "./UserTopic";
export enum UserRol {
  "Student",
  "Teacher",
}
export type Roles = "Student" | "Teacher";
@ObjectType()
@Entity()
export class User {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column("string")
  name!: string;

  @Field()
  @Column("string")
  lastname!: string;

  @Field()
  @Column("string")
  mail!: string;

  @Field()
  @Column("string")
  username!: string;

  @Field()
  @Column("string")
  password!: string;

  @Field(() => [String])
  @Column("string", { array: true })
  rol!: Array<String>;

  @Field(() => [UserAsignature], { nullable: true })
  @Column(() => UserAsignature)
  progress!: UserAsignature[];

  @Field(() => [UserTopic])
  @Column((type) => UserTopic)
  topic!: UserTopic[];

  @Field()
  @Column("boolean")
  rememberMe?: boolean;
}
