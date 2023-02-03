import { IsNotEmpty, MinLength } from 'class-validator';
import { CreateAsignatureDTO } from './create-asignature';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAsignatureDTO extends PartialType(CreateAsignatureDTO) {
  @Field(() => ID, { nullable: true })
  @IsNotEmpty({ message: 'El nombre de la asignatura no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  id: string;
}
