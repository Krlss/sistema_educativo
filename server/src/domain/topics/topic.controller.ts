import { topicService } from "./topic.service";
import { Topic } from "./topic.entity";

import {
  topicCreateInput,
  topicUpdateInput,
} from "../../infraestructure/validations/topics";

import { unitService } from "../units/unit.service";
import { asignatureService } from "../asignatures/asignature.service";

export class TopicController {
  private topicService: topicService;
  private unitService: unitService;
  private asignatureService: asignatureService;
  constructor() {
    this.topicService = new topicService();
    this.unitService = new unitService();
    this.asignatureService = new asignatureService();
  }

  async getTopics(): Promise<Topic[] | []> {
    return await this.topicService.findAll();
  }

  async getTopicById(id: number): Promise<Topic | null> {
    return await this.topicService.findById(id);
  }

  async createTopic(data: topicCreateInput): Promise<boolean | unknown> {
    try {
      const topic = new Topic();
      topic.name = data.name;
      topic.image = data.image;
      topic.video = data.video;

      topic.unit = (await this.unitService.findById(data.unit)) || undefined;
      topic.asignature =
        (await this.asignatureService.findById(data.asignature)) || undefined;

      return await this.topicService.create(topic);
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
      topic.asignature =
        (await this.asignatureService.findById(data.asignature)) || undefined;

      return await this.topicService.update(topic);
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
