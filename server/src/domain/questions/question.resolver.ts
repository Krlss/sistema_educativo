import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Question } from "./question.entity";
import {
  questionUpdateInput,
  questionCreateInput,
} from "../../infraestructure/validations/questions";

import { questionController } from "./question.controller";

@Resolver()
class QuestionResolver {
  private questionController: questionController;
  constructor() {
    this.questionController = new questionController();
  }

  @Mutation(() => Boolean)
  async createQuestion(
    @Arg("data") args: questionCreateInput
  ): Promise<boolean | unknown> {
    return await this.questionController.createQuestion(args);
  }

  @Query(() => [Question])
  async getQuestions() {
    return await this.questionController.getQuestions();
  }

  @Query(() => Question, { nullable: true })
  async getQuestion(@Arg("id") id: number) {
    return await this.questionController.getQuestionById(id);
  }

  @Mutation(() => Boolean)
  async updateQuestion(
    @Arg("id") id: number,
    @Arg("data") args: questionUpdateInput
  ): Promise<boolean | unknown> {
    return await this.questionController.updateQuestion(id, args);
  }

  @Mutation(() => Boolean)
  async deleteQuestion(@Arg("id") id: number): Promise<boolean | unknown> {
    return await this.questionController.deleteQuestion(id);
  }
}

export default QuestionResolver;
