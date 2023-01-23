import { IsNotEmpty, IsString, IsArray } from "class-validator";
import { Field, InputType, Int } from "type-graphql";
import { CoursePeriodNotExist } from "../courseperiods/coursePeriodNotExist";

@InputType()
export class periodUpdateInput {
  @Field({ description: "Nombre del periodo", nullable: true })
  @IsNotEmpty({ message: "El nombre del periodo no puede estar vacío" })
  @IsString({ message: "El nombre del periodo debe ser un string" })
  name?: string;

  @Field(() => [Int], {
    description: "Cursos del periodo",
    nullable: true,
  })
  @IsNotEmpty({ message: "Los cursos del periodo no pueden estar vacías" })
  @IsArray({ message: "Los cursos del periodo deben ser un array" })
  @CoursePeriodNotExist({ message: "Algunos de los cursos no existen" })
  courses?: number[];
}

export default periodUpdateInput;
