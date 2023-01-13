import { IsNotEmpty, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInputs {
  @Field({ description: "Correo del usuario", nullable: true })
  @IsEmail({ message: "El correo no es válido" })
  @IsNotEmpty({ message: "El correo no puede estar vacío" })
  email!: string;

  @Field({ description: "Contraseña del usuario", nullable: true })
  @IsNotEmpty({ message: "La contraseña no puede estar vacía" })
  password!: string;

  @Field({
    description: "Recordar usuario",
    nullable: true,
    defaultValue: false,
  })
  rememberMe!: boolean;
}
