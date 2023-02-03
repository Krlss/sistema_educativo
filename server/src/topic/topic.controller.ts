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
}
