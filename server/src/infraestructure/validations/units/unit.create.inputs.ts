import { MinLength, IsNotEmpty, ArrayNotEmpty } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { IsNameAlreadyExist } from "./isNameAlreadyExist";
import { TopicNotExist } from "../topics/topicNotExist";
@InputType()
export class unitCreateInput {
  @Field({ description: "Nombre de la unidad" })
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
  @TopicNotExist({ message: "Alguna asignatura no existe" })
  topics?: number[];
}
