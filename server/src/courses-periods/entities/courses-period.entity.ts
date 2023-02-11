import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Course } from 'src/course/entities/course.entity';
import { PeriodsCoursesAsignatures } from 'src/courses-periods-asignatures/entities/courses-periods-asignature.entity';
import { Period } from 'src/period/entities/period.entity';

@ObjectType()
export class PeriodsCourses {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  periodId: string;

  @Field({ nullable: true })
  courseId: string;

  @Field(() => Period, { nullable: true })
  period: Period;

  @Field(() => Course, { nullable: true })
  course: Course;

  @Field(() => [PeriodsCoursesAsignatures], { nullable: true })
  periodsCoursesAsignatures: PeriodsCoursesAsignatures[];
}
