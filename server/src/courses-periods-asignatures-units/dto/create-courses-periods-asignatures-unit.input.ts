import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePeriodsCoursesAsignaturesUnitInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
