import { MinLength, IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsNameAlreadyExist } from "./isNameAlreadyExist";

@InputType()
export class courseUpdateInput {
  @Field({ description: "Nombre del curso", nullable: true })
  @IsNotEmpty({ message: "El nombre del curso no puede estar vacío" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  @IsNameAlreadyExist({ message: "El curso ya existe" })
  name!: string;
}
