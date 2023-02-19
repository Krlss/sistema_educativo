import { CreateQuestionDTO } from './create-question';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';
import { QuestionDifficulty } from '../types/question.difficulty';

@InputType()
export class UpdateQuestionDTO extends PartialType(CreateQuestionDTO) {
  @IsNotEmpty({ message: 'El id de la pregunta no puede estar vacío' })
  @MinLength(2, {
    message: 'El id de la pregunta debe tener al menos 2 caracteres',
  })
  @Field({ description: 'Id de la pregunta' })
  id: string;

  @Field(() => QuestionDifficulty, { description: 'Prioridad de la pregunta' })
  @IsNotEmpty({ message: 'La prioridad de la pregunta no puede estar vacía' })
  priority: QuestionDifficulty;
}
