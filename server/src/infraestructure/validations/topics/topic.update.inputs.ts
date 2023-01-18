import { MinLength, IsNotEmpty } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { AsignatureNotExistSimple } from "../asignatures/asignatureNotExistSimple";
import { UnitNotExistSimple } from "../units/unitNotExistSimple";
import { IsNameAlreadyExist } from "./isNameAlreadyExist";

@InputType()
export class topicUpdateInput {
  @Field({ description: "El nombre de la unidad", nullable: true })
  @IsNotEmpty({ message: "El nombre no puede estar vacío" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  @IsNameAlreadyExist({ message: "El nombre ya existe" })
  name!: string;

  @Field({ description: "La clase del tema", nullable: true })
  @IsNotEmpty({ message: "La clase no puede estar vacía" })
  @MinLength(2, { message: "La clase debe tener al menos 2 caracteres" })
  image!: string;

  @Field({ description: "El video del tema", nullable: true })
  @IsNotEmpty({ message: "El video no puede estar vacío" })
  @MinLength(2, { message: "El video debe tener al menos 2 caracteres" })
  video!: string;

  @Field(() => Int, {
    description: "La unidad a la que pertenece el tema",
  })
  @IsNotEmpty({ message: "La unidad no puede estar vacía" })
  @UnitNotExistSimple({ message: "La unidad no existe" })
  unit!: number;

  @Field(() => Int, {
    description: "La asignatura a la que pertenece el tema",
  })
  @IsNotEmpty({ message: "La asignatura no puede estar vacía" })
  @AsignatureNotExistSimple({ message: "La asignatura no existe" })
  asignature!: number;
}
