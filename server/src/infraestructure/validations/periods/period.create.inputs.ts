import { IsNotEmpty, IsString, IsArray } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { CourseNotExist } from "../courses/courseNotExist";

@InputType()
export class periodCreateInput {
  @Field({ description: "Nombre del periodo" })
  @IsNotEmpty({ message: "El nombre del periodo no puede estar vacío" })
  @IsString({ message: "El nombre del periodo debe ser un string" })
  name!: string;

  @Field(() => [Int], {
    description: "Cursos del periodo",
    nullable: true,
  })
  @IsNotEmpty({ message: "Los cursos del periodo no pueden estar vacías" })
  @IsArray({ message: "Los cursos del periodo deben ser un array" })
  @CourseNotExist({ message: "Algunos de los cursos no existen" })
  courses?: number[];
}

export default periodCreateInput;
