import { Controller } from '@nestjs/common';
import { CreateTopicDTO } from './dto/create-topic';
import { UpdateTopicDTO } from './dto/update-topic';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}
  async getMany() {
    return this.topicService.getMany();
  }

  async get(id: string) {
    return this.topicService.get(id);
  }

  async create(data: CreateTopicDTO) {
    return this.topicService.create(data);
  }

  async update(data: UpdateTopicDTO) {
    return this.topicService.update(data);
  }

  async delete(id: string) {
    return this.topicService.delete(id);
  }

  async getTopicWithHighQuestion(id: string) {
    const topic = await this.topicService.get(id);

    const questionsHigh = topic.questions.filter(
      (question) => question.difficulty === 'high',
    );

    const randomIndex = Math.floor(Math.random() * questionsHigh.length);

    const question = questionsHigh[randomIndex]
      ? questionsHigh[randomIndex]
      : null;

    return {
      ...topic,
      ...(question && { question }),
    };
  }
}
