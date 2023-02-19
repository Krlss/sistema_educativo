import { ObjectType, Field, ID } from '@nestjs/graphql';
import { QuestionType } from '../types/question.type';
import { Topic } from 'src/topic/entities/topic.entity';
import { QuestionDifficulty } from '../types/question.difficulty';

@ObjectType()
export class Question {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true, defaultValue: undefined })
  subtitle?: string;

  @Field(() => QuestionType, {
    nullable: true,
  })
  type: QuestionType;

  @Field({ nullable: true })
  options: string;

  @Field(() => QuestionDifficulty, {
    defaultValue: QuestionDifficulty.low,
  })
  difficulty: QuestionDifficulty;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;

  @Field(() => Topic, { nullable: true })
  topic: Topic;
}
