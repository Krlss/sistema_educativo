import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreatePeriodDTO {
  @Field({ description: 'Nombre del periodo' })
  @IsNotEmpty({ message: 'El nombre del periodo no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name: string;

  @Field(() => [String], { description: 'Cursos del periodo', nullable: true })
  courses?: string[];
}
