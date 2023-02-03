import { InputType, Field } from '@nestjs/graphql';
import { QuestionType } from '../types/question.type';

@InputType()
export class CreateQuestionDTO {
  @Field({ description: 'Título de la pregunta' })
  title: string;

  @Field({
    description: 'Subtítulo de la pregunta',
    nullable: true,
    defaultValue: '',
  })
  subtitle: string;

  @Field(() => QuestionType, {
    description: 'Tipo de pregunta',
  })
  type: QuestionType;

  @Field({ description: 'Es un objecto, tiene varias formas.' })
  options: string;

  @Field({
    description: 'Id del tema al que pertenece la pregunta',
  })
  topicId: string;
}
