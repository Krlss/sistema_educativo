import "reflect-metadata";
import { Entity, Column, ObjectID, ObjectIdColumn, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { UserAsignature } from "./UserAsignature";
import { type } from "os";
import { isEmail } from "class-validator";
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

  @Field()
  @Column("boolean")
  rememberMe?: boolean;
}
