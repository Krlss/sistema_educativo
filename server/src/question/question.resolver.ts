import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
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

  @Query(() => [Question], { nullable: true })
  questionsByUnit(
    @Args('unitId') unitId: string,
    @Args('asignatureId') asignatureId: string,
    @Args('userId') userId: string,
  ) {
    return this.questionController.getManyByUnit(unitId, asignatureId, userId);
  }

  @Query(() => [Question], { nullable: true })
  questionsByAsignature(
    @Args('asignatureId') asignatureId: string,
    @Args('userId') userId: string,
  ) {
    return this.questionController.getManyByAsignature(asignatureId, userId);
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
