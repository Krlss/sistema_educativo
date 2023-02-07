import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsExistUser } from 'src/user/validations';

@InputType()
export class CreateProgressDTO {
  @Field(() => String, { description: 'User ID' })
  @IsNotEmpty({ message: 'User ID is required' })
  @Validate(IsExistUser, {
    message: 'User does not exist',
  })
  userId: string;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty({ message: 'PeriodsCoursesAsignatures ID is required' })
  periodsCoursesAsignaturesId: number;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty({ message: 'PeriodsCoursesAsignatures ID is required' })
  periodCourseAsignatureUnitId: number;
}
