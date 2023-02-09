import { CreatePeriodsCoursesAsignaturesUnitDTO } from './create-courses-periods-asignatures-unit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePeriodsCoursesAsignaturesUnitDTO extends PartialType(
  CreatePeriodsCoursesAsignaturesUnitDTO,
) {
  @Field(() => Int)
  id: number;
}
