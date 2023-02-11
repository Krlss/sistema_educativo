import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Asignature } from 'src/asignature/entities/asignature.entity';
import { PeriodsCourses } from 'src/courses-periods/entities/courses-period.entity';
import { Progress } from 'src/progress/entities/progress.entity';
import { PeriodsCoursesAsignaturesUnits } from 'src/courses-periods-asignatures-units/entities/courses-periods-asignatures-unit.entity';

@ObjectType()
export class PeriodsCoursesAsignatures {
  @Field({ nullable: true })
  id: number;

  @Field(() => [Asignature], { nullable: true })
  asignatureId: Asignature[];

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;

  @Field({ nullable: true })
  periodCourseId: number;

  @Field(() => Asignature, { nullable: true })
  asignature: Asignature;

  @Field({ nullable: true })
  periodCourseAsignatureId: number;

  @Field(() => PeriodsCourses, { nullable: true })
  periodCourse: PeriodsCourses;

  @Field(() => [PeriodsCoursesAsignaturesUnits], { nullable: true })
  periodCourseAsignatureUnit: PeriodsCoursesAsignaturesUnits[];

  @Field(() => [Progress], { nullable: true })
  progress: Progress[];
}
