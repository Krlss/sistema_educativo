import "reflect-metadata";
import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Question } from "./Question";
import { Unit } from "./Unit";

@Entity()
export class Topic extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  image!: string;

  @Column()
  video!: string;

  @ManyToOne(() => Unit, (unit) => unit.topics)
  units!: Unit;

  @OneToMany(() => Question, (question) => question.topic)
  questions!: Question[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;
}
