import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCoursesPeriodDTO {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
