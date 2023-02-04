import { CreatePeriodsCoursesAsignatureDTO } from './create-courses-periods-asignature';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePeriodsCoursesAsignatureDTO extends PartialType(
  CreatePeriodsCoursesAsignatureDTO,
) {
  @Field(() => Int)
  id: number;
}
