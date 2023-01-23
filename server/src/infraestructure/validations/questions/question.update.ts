import { MinLength, IsNotEmpty } from "class-validator";

import { Field, InputType } from "type-graphql";
import {
  PriorityType,
  TypeQuestion,
} from "../../../infraestructure/types/questions";

@InputType()
export class questionUpdateInput {
  @Field({ description: "Titulo de la pregunta", nullable: true })
  @MinLength(3, { message: "El titulo debe tener al menos 3 caracteres" })
  @IsNotEmpty({ message: "El titulo no puede estar vacio" })
  title!: string;

  @Field({ description: "Subtitulo de la pregunta", nullable: true })
  @MinLength(3, { message: "El subtitulo debe tener al menos 3 caracteres" })
  @IsNotEmpty({ message: "El subtitulo no puede estar vacio" })
  subtitle!: string;

  @Field({ description: "Opciones de la pregunta", nullable: true })
  @MinLength(3, { message: "Las opciones deben tener al menos 3 caracteres" })
  @IsNotEmpty({ message: "Las opciones no pueden estar vacias" })
  options!: string;

  @Field(() => TypeQuestion, {
    description: "Tipo de pregunta",
    nullable: true,
  })
  @MinLength(3, { message: "El tipo debe tener al menos 3 caracteres" })
  @IsNotEmpty({ message: "El tipo no puede estar vacio" })
  type!: TypeQuestion;

  @Field(() => PriorityType, {
    nullable: true,
    defaultValue: "low",
    description: "Prioridad de la pregunta",
  })
  @MinLength(3, { message: "La prioridad debe tener al menos 3 caracteres" })
  @IsNotEmpty({ message: "La prioridad no puede estar vacia" })
  priority!: PriorityType;

  @Field(() => Number, { description: "Tema de la pregunta", nullable: true })
  topic?: number;
}
