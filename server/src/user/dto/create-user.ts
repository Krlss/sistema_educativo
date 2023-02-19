import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsEmail, Validate } from 'class-validator';
import { IsExistsRoles } from '../../rol/validations/ids.rol.exist';
import { IsUniqueEmail } from '../validations/email.user.exist';

@InputType()
export class CreateUserDTO {
  @Field(() => String, { description: 'Email del usuario' })
  @IsNotEmpty({ message: 'El correo del usuario no puede estar vacío' })
  @MinLength(10, { message: 'El correo debe tener al menos 10 caracteres' })
  @IsEmail({}, { message: 'El correo no es válido' })
  @Validate(IsUniqueEmail, {
    message: 'El correo ya se encuentra registrado',
  })
  email: string;

  @Field(() => String, { description: 'Contraseña del usuario' })
  @IsNotEmpty({ message: 'La contraseña del usuario no puede estar vacía' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password: string;

  @Field(() => String, { description: 'Nombre del usuario' })
  @IsNotEmpty({ message: 'El nombre del usuario no puede estar vacía' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  name: string;

  @Field(() => String, { description: 'Apellido del usuario' })
  @IsNotEmpty({ message: 'El apellido del usuario no puede estar vacía' })
  @MinLength(3, { message: 'El apellido debe tener al menos 3 caracteres' })
  lastName: string;

  @Field(() => [String], { nullable: true, description: 'Roles del usuario' })
  @Validate(IsExistsRoles, {
    message: 'Alguno de los roles no existe',
  })
  roles: string[];

  @Field(() => [String], { nullable: true, description: 'Temas que ha visto' })
  topics: string[];
}
