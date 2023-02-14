import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesUnits } from 'src/courses-periods-asignatures-units/entities/courses-periods-asignatures-unit.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@ObjectType()
export class PeriodsCoursesAsignaturesUnitsTopics {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => ID, { nullable: true })
  topicId: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => Topic, { nullable: true })
  topic: Topic;

  @Field(() => Int, { nullable: true })
  periodCourseAsignatureUnitId: number;

  @Field(() => PeriodsCoursesAsignaturesUnits, { nullable: true })
  periodCourseAsignatureUnit: PeriodsCoursesAsignaturesUnits;
}
