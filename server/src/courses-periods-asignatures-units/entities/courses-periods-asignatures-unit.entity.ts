import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PeriodsCoursesAsignatures } from 'src/courses-periods-asignatures/entities/courses-periods-asignature.entity';
import { Unit } from 'src/unit/entities/unit.entity';
// import { PeriodsCoursesAsignaturesUnitsTopics } from 'src/periods-courses-asignatures-units-topics/entities/periods-courses-asignatures-units-topic.entity';
// import { Unit } from 'src/unit/entities/unit.entity';
// import { Progress } from 'src/progress/entities/progress.entity';

@ObjectType()
export class PeriodsCoursesAsignaturesUnits {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  periodCourseAsignatureId: number;

  @Field(() => Boolean)
  testActive: boolean;

  @Field(() => String)
  unitId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => PeriodsCoursesAsignatures)
  periodCourseAsignature: PeriodsCoursesAsignatures;

  @Field(() => Unit)
  unit: Unit;

  /* @Field(() => Unit)
  unit: Unit; */
  /* @Field(() => PeriodsCoursesAsignaturesUnitsTopic)
  periodCourseAsignatureUnitsTopic: PeriodsCoursesAsignaturesUnitsTopic; */

  /* @Field(() => Progress)
  progress: Progress; */
}
