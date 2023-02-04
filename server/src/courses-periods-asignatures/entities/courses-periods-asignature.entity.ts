import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Asignature } from 'src/asignature/entities/asignature.entity';
import { PeriodsCourses } from 'src/courses-periods/entities/courses-period.entity';

@ObjectType()
export class PeriodsCoursesAsignature {
  @Field({ nullable: true })
  id: number;

  /* @Field({ nullable: true })
  asignatureId: string; */

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;

  @Field({ nullable: true })
  periodCourseId: string;

  /* @Field({ nullable: true })
  asignature: Asignature; */

  @Field(() => PeriodsCourses, { nullable: true })
  periodCourse: PeriodsCourses;

  /* @Field(() => PeriodsCoursesAsignaturesUnits, { nullable: true })
  periodCourseAsignatureUnit: PeriodsCoursesAsignaturesUnits; */

  /* @Field(() => Progress, { nullable: true })
  progress: Progress; */
}
