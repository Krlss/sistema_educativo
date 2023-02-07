import { CreateUserDTO } from './create-user';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsExistUser } from '../validations';

@InputType()
export class UpdateUserDTO extends PartialType(CreateUserDTO) {
  @IsNotEmpty({ message: 'El id del usuario no puede estar vacío' })
  @Field({ description: 'Id del usuario' })
  @MinLength(2, { message: 'El id debe tener al menos 2 caracteres' })
  @Validate(IsExistUser, {
    message: 'El usuario no existe',
  })
  id: string;
}
