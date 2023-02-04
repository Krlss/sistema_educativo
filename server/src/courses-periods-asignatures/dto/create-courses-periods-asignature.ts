import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePeriodsCoursesAsignatureDTO {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
