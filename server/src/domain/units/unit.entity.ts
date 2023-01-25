import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Topic } from "../topics/topic.entity";
import { CoursePeriodAsignatureUnit } from "../coursePeriodAsignatureUnit/coursePeriodAsignatureUnit.entity";

@Entity()
@ObjectType()
export class Unit extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field(() => [Topic], { nullable: true })
  @OneToMany(() => Topic, (topic) => topic.unit)
  topics!: Topic[];

  /* @Field(() => [Content], { nullable: true })
  @OneToMany(() => Content, (content) => content.unit)
  content_unit!: Content[]; */

  @Field(() => [CoursePeriodAsignatureUnit], { nullable: true })
  @OneToMany(
    () => CoursePeriodAsignatureUnit,
    (coursePeriodAsignatureUnit) => coursePeriodAsignatureUnit.unit
  )
  courseperiodasignatureunit!: CoursePeriodAsignatureUnit[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field({ nullable: true })
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;
}
