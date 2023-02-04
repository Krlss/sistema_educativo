import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { CreateCourseDTO } from './create-course';
import { IsExist } from '../validations/id.course.exist';

@InputType()
export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {
  @IsNotEmpty({ message: 'El id del curso no puede estar vacío' })
  @Field({ description: 'Id del curso' })
  @MinLength(2, { message: 'El id debe tener al menos 2 caracteres' })
  @Validate(IsExist, {
    message: 'El curso no existe',
  })
  id: string;
}
