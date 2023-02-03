import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsNameUnique } from '../validations/name.period.exist';

@InputType()
export class CreatePeriodDTO {
  @Field({ description: 'Nombre del periodo' })
  @IsNotEmpty({ message: 'El nombre del periodo no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  @Validate(IsNameUnique, {
    message: 'El nombre del periodo ya existe',
  })
  name: string;

  @Field(() => [String], { description: 'Cursos del periodo', nullable: true })
  courses?: string[];
}
