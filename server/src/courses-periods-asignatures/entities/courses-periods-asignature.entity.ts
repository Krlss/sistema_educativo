import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Asignature } from 'src/asignature/entities/asignature.entity';
import { PeriodsCourses } from 'src/courses-periods/entities/courses-period.entity';
import { Progress } from 'src/progress/entities/progress.entity';
import { PeriodsCoursesAsignaturesUnit } from 'src/courses-periods-asignatures-units/entities/courses-periods-asignatures-unit.entity';

@ObjectType()
export class PeriodsCoursesAsignature {
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
  periodCourseId: string;

  @Field(() => PeriodsCourses, { nullable: true })
  periodCourse: PeriodsCourses;

  @Field(() => [PeriodsCoursesAsignaturesUnit], { nullable: true })
  periodCourseAsignatureUnit: PeriodsCoursesAsignaturesUnit[];

  @Field(() => [Progress], { nullable: true })
  progress: Progress[];
}
