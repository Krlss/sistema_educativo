import { CreateCoursesPeriodsAsignatureDTO } from './create-courses-periods-asignature';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCoursesPeriodsAsignatureDTO extends PartialType(
  CreateCoursesPeriodsAsignatureDTO,
) {
  @Field(() => Int)
  id: number;
}
