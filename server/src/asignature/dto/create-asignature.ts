import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateAsignatureDTO {
  @Field(() => String, {
    description: 'Nombre de la asignatura',
  })
  @IsNotEmpty({ message: 'El nombre de la asignatura no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name: string;
}
