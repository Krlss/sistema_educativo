import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Course } from "../courses/course.entity";
import { Period } from "../periods/period.entity";
import { CoursePeriodAsignature } from "../coursePeriodAsignature/coursePeriodAsignature.entity";

@Entity()
@ObjectType()
export class CoursePeriod extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Course)
  @ManyToOne(() => Course, (course) => course.periods)
  course!: Course;

  @Field(() => Period)
  @ManyToOne(() => Period, (period) => period.courses)
  period!: Period;

  @Field(() => [CoursePeriodAsignature], { nullable: true })
  @OneToMany(
    () => CoursePeriodAsignature,
    (courseperiod_asignature) => courseperiod_asignature.courseperiod
  )
  courseperiod_asignatures!: CoursePeriodAsignature[];
}
