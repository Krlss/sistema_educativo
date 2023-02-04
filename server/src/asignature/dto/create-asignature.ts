import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsCoursePeriodsExist } from 'src/courses-periods/validations/ids.course-period.exist';

@InputType()
export class CreateAsignatureDTO {
  @Field(() => String, {
    description: 'Nombre de la asignatura',
  })
  @IsNotEmpty({ message: 'El nombre de la asignatura no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name: string;

  @Field(() => [Int], {
    description: 'Cursos a los que pertenece la asignatura',
    nullable: true,
  })
  @IsNotEmpty({ message: 'El curso no puede estar vacío' })
  @Validate(IsCoursePeriodsExist, {
    message: 'El curso no existe en este periodo',
  })
  periodsCourses: number[];
}
