import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import {
  PriorityType,
  TypeQuestion,
} from "../../infraestructure/types/questions";
import { Topic } from "../topics/topic.entity";
import { Progress } from "../progress/progress.entity";

@Entity()
@ObjectType()
export class Question extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  subtitle!: string;

  @Field()
  @Column({ type: "text" })
  options!: string;

  @Field(() => TypeQuestion, { nullable: true })
  @Column()
  type!: TypeQuestion;

  @Field(() => PriorityType, { nullable: true, defaultValue: PriorityType.low })
  @Column({ type: "enum", enum: PriorityType })
  priority!: PriorityType;

  /* @Field(() => [Content], { nullable: true })
  @OneToMany(() => Content, (content) => content.question)
  content_question!: Content[]; */

  @Field(() => [Progress], { nullable: true })
  @OneToMany(() => Progress, (progress) => progress.questions)
  progress!: Progress[];

  @Field(() => Topic, { nullable: true })
  @ManyToOne(() => Topic, (topic) => topic.questions)
  topic!: Topic;

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field()
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;
}
