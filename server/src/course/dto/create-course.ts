import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsNameUnique } from '../validations';
import { IsPeriodsExist } from 'src/period/validations/ids.period.exist';

@InputType()
export class CreateCourseDTO {
  @Field({ description: 'Nombre del curso' })
  @IsNotEmpty({ message: 'El nombre del curso no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  @Validate(IsNameUnique, {
    message: 'El nombre del curso ya existe',
  })
  name: string;

  @Field(() => [String], { description: 'Períodos del curso', nullable: true })
  @Validate(IsPeriodsExist, {
    message: 'Algunos de los períodos no existen',
  })
  periods?: string[];

  @Field(() => [String], {
    description: 'Asignaturas del curso',
    nullable: true,
  })
  asignatures?: string[];
}
