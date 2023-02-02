import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';

@InputType()
export class CreateCourseDTO {
  @Field({ description: 'Nombre del curso' })
  @IsNotEmpty({ message: 'El nombre del curso no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name: string;

  @Field(() => [String], { description: 'Períodos del curso', nullable: true })
  periods?: string[];
}
