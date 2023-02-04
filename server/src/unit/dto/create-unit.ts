import { InputType, Field, Int } from '@nestjs/graphql';
import { IsUniqueName } from '../validations';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';

@InputType()
export class CreateUnitDTO {
  @Field(() => String, { description: 'Nombre de la unidad' })
  @Validate(IsUniqueName, {
    message: 'Ya existe una unidad con este nombre',
  })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name: string;

  @Field(() => [Int], {
    description: 'Asignatura a la que pertenece la unidad',
    nullable: true,
  })
  @IsNotEmpty({ message: 'La asignatura no puede estar vacía' })
  periodsCoursesAsignature: number[];
}
