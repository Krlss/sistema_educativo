import { MinLength, IsNotEmpty } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { CourseNotExist } from "../courses/courseNotExist";
import { UnitNotExist } from "../units/unitNotExist";
import { IsNameAlreadyExist } from "./isNameAlreadyExist";

@InputType()
export class asignatureUpdateInput {
  @Field({ description: "Nombre del curso", nullable: true })
  @IsNotEmpty({ message: "El nombre del curso no puede estar vacío" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  @IsNameAlreadyExist({ message: "El curso ya existe" })
  name!: string;

  @Field({ description: "Descripción del curso", nullable: true })
  @IsNotEmpty({ message: "La descripción del curso no puede estar vacía" })
  @MinLength(2, { message: "La descripción debe tener al menos 2 caracteres" })
  description!: string;

  @Field({ description: "Imagen del curso", nullable: true })
  @IsNotEmpty({ message: "La imagen del curso no puede estar vacía" })
  @MinLength(2, { message: "La imagen debe tener al menos 2 caracteres" })
  image!: string;

  @Field(() => [Int], { description: "Unidades del curso", nullable: true })
  @IsNotEmpty({ message: "Las unidades del curso no pueden estar vacías" })
  @UnitNotExist({ message: "Algunas de las unidades no existen" })
  units?: number[];

  @Field(() => [Int], {
    description: "Cursos de la asignatura",
    nullable: true,
  })
  @IsNotEmpty({ message: "Los cursos de la asignatura no pueden estar vacías" })
  @CourseNotExist({ message: "Algunos de los cursos no existe" })
  courses?: number[];
}
