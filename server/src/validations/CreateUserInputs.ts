import { MinLength, IsNotEmpty, IsEmail, ArrayNotEmpty } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { IsEmailAlreadyExist } from "./custom-validations/isEmailAlreadyExist";
import { RolNotExist } from "./custom-validations/rolNotExist";

@InputType()
export class CreateUserInputs {
  @Field({ description: "Nombres del usuario" })
  @IsNotEmpty({ message: "El nombre no puede estar vacío" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  name!: string;

  @Field({ description: "Apellidos del usuario" })
  @IsNotEmpty({ message: "El apellido no puede estar vacío" })
  @MinLength(2, { message: "El apellido debe tener al menos 2 caracteres" })
  lastname!: string;

  @Field({ description: "Correo del usuario" })
  @IsEmail({ message: "El correo no es válido" })
  @IsNotEmpty({ message: "El correo no puede estar vacío" })
  @IsEmailAlreadyExist({ message: "El correo ya existe" })
  email!: string;

  @Field({ description: "Contraseña del usuario" })
  @IsNotEmpty({ message: "La contraseña no puede estar vacía" })
  @MinLength(8, { message: "La contraseña debe tener al menos 8 caracteres" })
  password!: string;

  @Field(() => [Int], { description: "Roles del usuario" })
  @ArrayNotEmpty({ message: "El rol no puede estar vacío" })
  @RolNotExist({ message: "El rol no existe" })
  rol!: number[];
}