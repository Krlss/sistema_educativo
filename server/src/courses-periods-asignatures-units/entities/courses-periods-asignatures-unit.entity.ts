import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesUnitsTopics } from 'src/course-periods-asignatures-units-topic/entities/course-periods-asignatures-units-topic.entity';
import { PeriodsCoursesAsignatures } from 'src/courses-periods-asignatures/entities/courses-periods-asignature.entity';
import { Progress } from 'src/progress/entities/progress.entity';
import { Unit } from 'src/unit/entities/unit.entity';

@ObjectType()
export class PeriodsCoursesAsignaturesUnits {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => Boolean, { nullable: true })
  testActive: boolean;

  @Field(() => ID, { nullable: true })
  unitId: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => Int, { nullable: true })
  periodCourseAsignatureId: number;

  @Field(() => Unit, { nullable: true })
  unit: Unit;

  @Field(() => PeriodsCoursesAsignatures, { nullable: true })
  periodCourseAsignature: PeriodsCoursesAsignatures;

  @Field(() => [PeriodsCoursesAsignaturesUnitsTopics], { nullable: true })
  periodCourseAsignatureUnitsTopic: PeriodsCoursesAsignaturesUnitsTopics[];

  @Field(() => [Progress], { nullable: true })
  progress: Progress[];
}
