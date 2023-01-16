import { MinLength, IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsNameAlreadyExist } from "./isNameAlreadyExist";

@InputType()
export class rolCreateInput {
  @Field({ description: "Nombres del rol" })
  @IsNotEmpty({ message: "El nombre del rol no puede estar vacío" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  @IsNameAlreadyExist({ message: "El rol ya existe" })
  name!: string;
}
