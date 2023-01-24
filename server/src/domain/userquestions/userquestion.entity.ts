import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../users/user.entity";
import { Question } from "../questions/question.entity";

@Entity()
@ObjectType()
export class Progress extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  answer?: string;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.progress)
  users!: User;

  @Field(() => Question, { nullable: true })
  @ManyToOne(() => Question, (question) => question.progress)
  questions!: Question;
}
