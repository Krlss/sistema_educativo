import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Question } from 'src/question/entities/question.entity';

@ObjectType()
export class Topic {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  video: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;

  @Field(() => [Question], { nullable: true })
  questions: Question[];
}
