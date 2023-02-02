import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';
import { CreateCourseDTO } from './create-course';

@InputType()
export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {
  @IsNotEmpty({ message: 'El id del curso no puede estar vacío' })
  @Field({ description: 'Id del curso' })
  @MinLength(2, { message: 'El id debe tener al menos 2 caracteres' })
  id: string;
}
