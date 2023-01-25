import { topicService } from "./topic.service";
import { Topic } from "./topic.entity";

import {
  topicCreateInput,
  topicUpdateInput,
} from "../../infraestructure/validations/topics";

import { unitService } from "../units/unit.service";
import { asignatureService } from "../asignatures/asignature.service";
import { coursePeriodAsignatureService } from "../coursePeriodAsignature/coursePeriodAsignature.service";

export class TopicController {
  private topicService: topicService;
  private unitService: unitService;
  private coursePeriodAsignatureService: coursePeriodAsignatureService;
  constructor() {
    this.topicService = new topicService();
    this.unitService = new unitService();
    this.coursePeriodAsignatureService = new coursePeriodAsignatureService();
  }

  async getTopics(): Promise<Topic[] | []> {
    return await this.topicService.findAll();
  }

  async getTopicById(id: number): Promise<Topic | null> {
    return await this.topicService.findById(id);
  }

  async getTopicsByUnit(unit: number): Promise<Topic[] | []> {
    return await this.topicService.getTopicsByUnit(unit);
  }

  async getTopicsByAsignature(asignature: number): Promise<Topic[] | []> {
    return await this.topicService.getTopicsByAsignature(asignature);
  }

  async createTopic(data: topicCreateInput): Promise<boolean | unknown> {
    try {
      const topic = new Topic();
      topic.name = data.name;
      topic.image = data.image;
      topic.video = data.video;

      topic.unit = (await this.unitService.findById(data.unit)) || undefined;
      await this.topicService.create(topic);

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateTopic(
    id: number,
    data: topicUpdateInput
  ): Promise<boolean | unknown> {
    try {
      const topic = await this.getTopicById(id);
      if (!topic) throw new Error("El tema no existe");

      topic.name = data.name;
      topic.image = data.image;
      topic.video = data.video;
      topic.updatedAt = new Date();

      topic.unit = (await this.unitService.findById(data.unit)) || undefined;
      await this.topicService.update(topic);

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteTopic(id: number): Promise<boolean | unknown> {
    try {
      const topic = await this.getTopicById(id);
      if (!topic) throw new Error("El tema no existe");
      return await this.topicService.delete(topic.id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
