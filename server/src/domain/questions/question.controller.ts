import {
  questionCreateInput,
  questionUpdateInput,
} from "../../infraestructure/validations/questions";
import { questionService } from "../questions/question.service";
import { topicService } from "../topics/topic.service";
import { Question } from "./question.entity";

export class questionController {
  private questionService: questionService;
  private topicService: topicService;

  constructor() {
    this.questionService = new questionService();
    this.topicService = new topicService();
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

      const topic = await this.topicService.findById(data.topic);
      if (!topic) throw new Error("El tema no existe");

      question.topic = topic;

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
      if (data.title) question.title = data.title;
      if (data.subtitle) question.subtitle = data.subtitle;
      if (data.options) question.options = data.options;
      if (data.type) question.type = data.type;
      if (data.priority) question.priority = data.priority;
      question.updatedAt = new Date();
      if (data.topic) {
        const topic = await this.topicService.findById(data.topic);
        if (!topic) throw new Error("El tema no existe");
        question.topic = topic;
      }
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
