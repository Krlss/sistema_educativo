import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import {
  PriorityType,
  TypeQuestion,
} from "../../infraestructure/types/questions";
import { Content } from "../content/content.entity";

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

  @Field(() => [Content], { nullable: true })
  @OneToMany(() => Content, (content) => content.question)
  content_question!: Content[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field()
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;
}
