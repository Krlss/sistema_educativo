import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CoursePeriod } from "../course_period/course_period.entity";
import { Asignature } from "../asignatures/asignature.entity";
import { User } from "../users/user.entity";
import { Topic } from "../topics/topic.entity";
import { UserAsignature } from "../userasignatures/userasignature.entity";

@Entity()
@ObjectType()
export class CoursePeriodAsignature extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => CoursePeriod, { nullable: true })
  @ManyToOne(
    () => CoursePeriod,
    (courseperiod) => courseperiod.courseperiod_asignatures
  )
  courseperiod!: CoursePeriod;

  @Field(() => Asignature, { nullable: true })
  @ManyToOne(
    () => Asignature,
    (asignature) => asignature.courseperiod_asignatures
  )
  asignature!: Asignature;

  /* @Field(() => [Content], { nullable: true })
  @OneToMany(() => Content, (content) => content.courseperiod_asignature)
  contents_courseperiodasignature!: Content[]; */

  @Field(() => UserAsignature, { nullable: true })
  @OneToMany(
    () => UserAsignature,
    (userasignature) => userasignature.courseperiodasignature
  )
  userasignature!: UserAsignature;

  @Field(() => [Topic], { nullable: true })
  @OneToMany(() => Topic, (topic) => topic.coursePeriodAsignature)
  topics!: Topic[];
}
