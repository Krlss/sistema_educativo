import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCoursePeriodsAsignaturesUnitsTopicInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
