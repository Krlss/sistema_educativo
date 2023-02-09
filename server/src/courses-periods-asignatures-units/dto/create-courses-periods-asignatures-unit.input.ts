import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePeriodsCoursesAsignaturesUnitDTO {
  @Field(() => Boolean, { description: '' })
  testActive: boolean;
}
