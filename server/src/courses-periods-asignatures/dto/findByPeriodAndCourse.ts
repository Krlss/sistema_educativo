import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsExist as IsCourseIdExist } from 'src/course/validations';
import { IsExist as IsPeriodIdExist } from 'src/period/validations';

@InputType()
export class FindByPeriodAndCourseDTO {
  @IsNotEmpty({ message: 'El id del periodo no puede estar vacío' })
  @MinLength(2, {
    message: 'El id del periodo debe tener al menos 2 caracteres',
  })
  @Validate(IsPeriodIdExist, {
    message: 'El periodo no existe',
  })
  @Field({ description: 'Id del periodo' })
  periodId: string;

  @IsNotEmpty({ message: 'El id del curso no puede estar vacío' })
  @MinLength(2, {
    message: 'El id del periodo debe tener al menos 2 caracteres',
  })
  @Validate(IsCourseIdExist, {
    message: 'El curso no existe',
  })
  @Field({ description: 'Id del curso' })
  courseId: string;
}
