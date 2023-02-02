import { CreateUserDTO } from './create-user';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class UpdateUserDTO extends PartialType(CreateUserDTO) {
  @IsNotEmpty({ message: 'El id del rol no puede estar vacío' })
  @Field({ description: 'Id del rol' })
  @MinLength(2, { message: 'El id debe tener al menos 2 caracteres' })
  id: string;
}
