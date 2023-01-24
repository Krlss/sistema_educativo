import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Progress {
  @Field()
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(() => String, { nullable: true })
  isFinished?: boolean;

  // @Field(() => String, { nullable: true })
}
