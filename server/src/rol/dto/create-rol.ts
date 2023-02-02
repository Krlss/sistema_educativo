import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateRolDTO {
  @Field({ description: 'Nombre del rol' })
  @IsNotEmpty({ message: 'El nombre del rol no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  name: string;

  @Field(() => [String], { description: 'Usuarios del rol', nullable: true })
  users?: string[];
}
