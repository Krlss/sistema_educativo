import { MinLength, IsNotEmpty, ArrayNotEmpty } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { AsignatureNotExist } from "../asignatures/asignatureNotExist";
import { IsNameAlreadyExist } from "./isNameAlreadyExist";

@InputType()
export class unitUpdateInput {
  @Field({ description: "Nombre de la unidad", nullable: true })
  @IsNotEmpty({ message: "El nombre de la unidad no puede estar vacío" })
  @MinLength(1, { message: "El nombre debe tener al menos 2 caracteres" })
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
