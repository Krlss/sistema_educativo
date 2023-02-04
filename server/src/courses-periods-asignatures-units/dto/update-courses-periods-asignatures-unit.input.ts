import { CreatePeriodsCoursesAsignaturesUnitInput } from './create-courses-periods-asignatures-unit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePeriodsCoursesAsignaturesUnitInput extends PartialType(
  CreatePeriodsCoursesAsignaturesUnitInput,
) {
  @Field(() => Int)
  id: number;
}
