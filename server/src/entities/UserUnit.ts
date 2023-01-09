import "reflect-metadata";
import { Column, ObjectIdColumn, ObjectID } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserUnit {
  @Field(() => String)
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field()
  @Column("int")
  nota!: number;

  @Field()
  @Column("string")
  id_unit!: string;

  @Field({ nullable: true })
  @Column("string")
  questions!: string;

  @Field({ nullable: true })
  @Column("boolean", { nullable: true })
  finished!: boolean;
}
