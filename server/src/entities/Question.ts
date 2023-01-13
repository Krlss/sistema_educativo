import "reflect-metadata";
import { Field, Int, ObjectType } from "type-graphql";
import {
  Any,
  Column,
  PrimaryGeneratedColumn,
  ObjectID,
  BaseEntity,
  OneToOne,
  Entity,
} from "typeorm";
import { Topic } from "./Topic";

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  answer!: string;

  @Column()
  options!: string;

  @Column()
  priority!: number;

  @OneToOne(() => Question, (question) => question.id)
  topic!: Topic;

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;
}
