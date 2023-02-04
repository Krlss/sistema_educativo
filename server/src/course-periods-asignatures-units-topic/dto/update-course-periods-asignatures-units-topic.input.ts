import { CreateCoursePeriodsAsignaturesUnitsTopicInput } from './create-course-periods-asignatures-units-topic.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCoursePeriodsAsignaturesUnitsTopicInput extends PartialType(CreateCoursePeriodsAsignaturesUnitsTopicInput) {
  @Field(() => Int)
  id: number;
}
