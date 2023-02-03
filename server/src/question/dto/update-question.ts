import { CreateQuestionDTO } from './create-question';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class UpdateQuestionDTO extends PartialType(CreateQuestionDTO) {
  @IsNotEmpty({ message: 'El id de la pregunta no puede estar vacío' })
  @MinLength(2, {
    message: 'El id de la pregunta debe tener al menos 2 caracteres',
  })
  @Field({ description: 'Id de la pregunta' })
  id: string;
}
