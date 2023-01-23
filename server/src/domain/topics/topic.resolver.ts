import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Topic } from "./topic.entity";

import { TopicController } from "./topic.controller";

import {
  topicCreateInput,
  topicUpdateInput,
} from "../../infraestructure/validations/topics";

@Resolver()
class TopicResolver {
  private TopicController: TopicController;

  constructor() {
    this.TopicController = new TopicController();
  }

  @Query(() => [Topic])
  async getTopics() {
    return await this.TopicController.getTopics();
  }

  @Query(() => Topic, { nullable: true })
  async getTopic(@Arg("id") id: number) {
    return await this.TopicController.getTopicById(id);
  }

  @Query(() => [Topic], { nullable: true })
  async getTopicsByUnit(@Arg("unit") unit: number) {
    return await this.TopicController.getTopicsByUnit(unit);
  }

  @Query(() => [Topic], { nullable: true })
  async getTopicsByAsignature(@Arg("asignature") asignature: number) {
    return await this.TopicController.getTopicsByAsignature(asignature);
  }

  @Mutation(() => Boolean)
  async createTopic(
    @Arg("data") args: topicCreateInput
  ): Promise<boolean | unknown> {
    return await this.TopicController.createTopic({
      ...args,
    });
  }

  @Mutation(() => Boolean)
  async updateTopic(
    @Arg("id") id: number,
    @Arg("data") args: topicUpdateInput
  ): Promise<boolean | unknown> {
    return await this.TopicController.updateTopic(id, {
      ...args,
    });
  }

  @Mutation(() => Boolean)
  async deleteTopic(@Arg("id") id: number): Promise<boolean | unknown> {
    return await this.TopicController.deleteTopic(id);
  }
}

export default TopicResolver;
