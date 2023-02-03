import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Question } from './entities/question.entity';
import { CreateQuestionDTO } from './dto/create-question';
import { UpdateQuestionDTO } from './dto/update-question';
import { QuestionController } from './question.controller';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionController: QuestionController) {}

  @Query(() => [Question], { nullable: true })
  questions() {
    return this.questionController.getMany();
  }

  @Query(() => Question, { nullable: true })
  question(@Args('id') id: string) {
    return this.questionController.get(id);
  }

  @Mutation(() => Question)
  createQuestion(@Args('input') data: CreateQuestionDTO) {
    return this.questionController.create(data);
  }

  @Mutation(() => Question)
  updateQuestion(@Args('input') data: UpdateQuestionDTO) {
    return this.questionController.update(data);
  }

  @Mutation(() => Question)
  deleteQuestion(@Args('id') id: string) {
    return this.questionController.delete(id);
  }
}
