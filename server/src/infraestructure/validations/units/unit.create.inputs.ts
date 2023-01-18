import { MinLength, IsNotEmpty, ArrayNotEmpty } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { IsNameAlreadyExist } from "./isNameAlreadyExist";
import { AsignatureNotExist } from "../asignatures/asignatureNotExist";
@InputType()
export class unitCreateInput {
  @Field({ description: "Nombre de la unidad" })
  @IsNotEmpty({ message: "El nombre de la unidad no puede estar vacío" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  @IsNameAlreadyExist({ message: "La unidad ya existe" })
  name!: string;

  @Field(() => [Int], {
    description: "Asignaturas de la unidad",
    nullable: true,
  })
  @ArrayNotEmpty({
    message: "Las asignaturas de la unidad no pueden estar vacías",
  })
  @AsignatureNotExist({ message: "Alguna asignatura no existe" })
  asignatures!: number[];
}
