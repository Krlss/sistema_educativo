import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';
import { QuestionType } from '../types/question.type';

@InputType()
export class CreateQuestionDTO {
  @Field({ description: 'Título de la pregunta' })
  @IsNotEmpty({ message: 'El titulo de la pregunta no puede estar vacío' })
  @MinLength(2, {
    message: 'El titulo de la pregunta debe tener al menos 2 caracteres',
  })
  title: string;

  @Field({
    description: 'Subtítulo de la pregunta',
    nullable: true,
    defaultValue: '',
  })
  @IsNotEmpty({ message: 'El subtitulo de la pregunta no puede estar vacío' })
  @MinLength(2, {
    message: 'El subtitulo de la pregunta debe tener al menos 2 caracteres',
  })
  subtitle: string;

  @Field(() => QuestionType, {
    description: 'Tipo de pregunta',
  })
  @IsNotEmpty({ message: 'El tipo de la pregunta no puede estar vacío' })
  type: QuestionType;

  @Field({ description: 'Es un objecto, tiene varias formas.' })
  @IsNotEmpty({ message: 'Las opciones de la pregunta no pueden estar vacías' })
  options: string;

  @Field({
    description: 'Id del tema al que pertenece la pregunta',
  })
  topicId: string;
}
