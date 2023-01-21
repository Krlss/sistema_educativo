import { MinLength, IsNotEmpty, ArrayNotEmpty } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { IsNameAlreadyExist } from "./isNameAlreadyExist";
import { PeriodNotExist } from "../periods/periodNotExist";

@InputType()
export class courseCreateInput {
  @Field({ description: "Nombre del curso" })
  @IsNotEmpty({ message: "El nombre del curso no puede estar vacío" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  @IsNameAlreadyExist({ message: "El curso ya existe" })
  name!: string;

  /* @ Field(() => [Int], { description: "Asignaturas del curso", nullable: true })
  @AsignatureNotExist({ message: "Alguna de las asignaturas no existe" })
  @ArrayNotEmpty({ message: "El curso debe tener al menos una asignatura" })
  asignatures?: number[]; */

  @Field(() => [Int], { description: "Periodos del curso", nullable: true })
  @PeriodNotExist({ message: "Alguno de los periodos no existe" })
  @ArrayNotEmpty({ message: "El curso debe tener al menos un periodo" })
  periods?: number[];
}
