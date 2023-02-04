import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PeriodsCoursesAsignature } from 'src/courses-periods-asignatures/entities/courses-periods-asignature.entity';
// import { PeriodsCoursesAsignaturesUnitsTopics } from 'src/periods-courses-asignatures-units-topics/entities/periods-courses-asignatures-units-topic.entity';
// import { Unit } from 'src/unit/entities/unit.entity';
// import { Progress } from 'src/progress/entities/progress.entity';

@ObjectType()
export class PeriodsCoursesAsignaturesUnit {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  periodCourseAsignatureId: number;

  @Field(() => String)
  unitId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => PeriodsCoursesAsignature)
  periodCourseAsignature: PeriodsCoursesAsignature;

  /* @Field(() => Unit)
  unit: Unit; */
  /* @Field(() => PeriodsCoursesAsignaturesUnitsTopic)
  periodCourseAsignatureUnitsTopic: PeriodsCoursesAsignaturesUnitsTopic; */

  /* @Field(() => Progress)
  progress: Progress; */
}
