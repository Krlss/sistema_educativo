import { CreateCoursesPeriodDTO } from './create-courses-period';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCoursesPeriodDTO extends PartialType(
  CreateCoursesPeriodDTO,
) {
  @Field(() => Int)
  id: number;
}
