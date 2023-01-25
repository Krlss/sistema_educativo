import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
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

  @Field(() => Course, { nullable: true })
  @ManyToOne(() => Course, (course) => course.course_periods)
  courses!: Course;

  @Field(() => Period, { nullable: true })
  @ManyToOne(() => Period, (period) => period.course_periods)
  periods!: Period;

  @Field(() => [CoursePeriodAsignature], { nullable: true })
  @OneToMany(
    () => CoursePeriodAsignature,
    (courseperiod_asignature) => courseperiod_asignature.courseperiod
  )
  courseperiod_asignatures!: CoursePeriodAsignature[];
}
