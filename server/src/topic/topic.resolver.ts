import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TopicController } from './topic.controller';
import { Topic } from './entities/topic.entity';
import { CreateTopicDTO } from './dto/create-topic';
import { UpdateTopicDTO } from './dto/update-topic';
import { TopicCustom } from './entities/topicCustom';

@Resolver(() => Topic)
export class TopicResolver {
  constructor(private readonly topicController: TopicController) {}

  @Query(() => [Topic], { nullable: true })
  topics() {
    return this.topicController.getMany();
  }

  @Query(() => Topic, { nullable: true })
  topic(@Args('id') id: string) {
    return this.topicController.get(id);
  }

  @Query(() => TopicCustom, { nullable: true })
  topicWithOneHighQuestion(@Args('id') id: string) {
    return this.topicController.getTopicWithHighQuestion(id);
  }

  @Mutation(() => Topic)
  createTopic(@Args('input') data: CreateTopicDTO) {
    return this.topicController.create(data);
  }

  @Mutation(() => Topic)
  updateTopic(@Args('input') data: UpdateTopicDTO) {
    return this.topicController.update(data);
  }

  @Mutation(() => Topic)
  removeTopic(@Args('id') id: string) {
    return this.topicController.delete(id);
  }
}
