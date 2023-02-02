import { CreateRolDTO } from './create-rol';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class UpdateRolDTO extends PartialType(CreateRolDTO) {
  @IsNotEmpty({ message: 'El id del rol no puede estar vacío' })
  @Field({ description: 'Id del rol' })
  @MinLength(2, { message: 'El id debe tener al menos 2 caracteres' })
  id: string;
}
