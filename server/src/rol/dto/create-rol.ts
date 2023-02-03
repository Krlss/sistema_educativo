import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsNameUnique } from '../validations';
import { IsExistsUsers } from 'src/user/validations/ids.user.exist';

@InputType()
export class CreateRolDTO {
  @Field({ description: 'Nombre del rol' })
  @IsNotEmpty({ message: 'El nombre del rol no puede estar vacío' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  @Validate(IsNameUnique, {
    message: 'El nombre del rol ya existe',
  })
  name: string;

  @Field(() => [String], { description: 'Usuarios del rol', nullable: true })
  @Validate(IsExistsUsers, {
    message: 'Alguno de los usuarios no existe',
  })
  users?: string[];
}
