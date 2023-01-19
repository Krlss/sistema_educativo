import {
  questionCreateInput,
  questionUpdateInput,
} from "../../infraestructure/validations/questions";
import { questionService } from "../questions/question.service";
import { Question } from "./question.entity";

export class questionController {
  private questionService: questionService;

  constructor() {
    this.questionService = new questionService();
  }

  async getQuestions() {
    return await this.questionService.findAll();
  }

  async getQuestionById(id: number) {
    return await this.questionService.findById(id);
  }

  async createQuestion(data: questionCreateInput): Promise<boolean | unknown> {
    try {
      const question = new Question();
      question.title = data.title;
      question.subtitle = data.subtitle;
      question.options = data.options;
      question.type = data.type;
      question.priority = data.priority;

      return await this.questionService.create(question);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateQuestion(
    id: number,
    data: questionUpdateInput
  ): Promise<boolean | unknown> {
    try {
      const question = await this.getQuestionById(id);
      if (!question) throw new Error("La pregunta no existe");
      question.title = data.title;
      question.subtitle = data.subtitle;
      question.options = data.options;
      question.type = data.type;
      question.priority = data.priority;
      question.updatedAt = new Date();
      return await this.questionService.update(question);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteQuestion(id: number): Promise<boolean | unknown> {
    try {
      const question = await this.getQuestionById(id);
      if (!question) throw new Error("La pregunta no existe");
      return await this.questionService.delete(question);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
