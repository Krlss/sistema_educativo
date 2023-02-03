import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateTopicDTO } from './dto/create-topic';
import { UpdateTopicDTO } from './dto/update-topic';

@Injectable()
export class TopicService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMany() {
    return this.prismaService.topic.findMany({
      include: {
        questions: true,
      },
    });
  }

  async get(id: string) {
    return this.prismaService.topic.findUnique({
      where: { id },
      include: {
        questions: true,
      },
    });
  }

  async create(data: CreateTopicDTO) {
    return this.prismaService.topic.create({
      data,
    });
  }

  async update(data: UpdateTopicDTO) {
    return this.prismaService.topic.update({
      where: { id: data.id },
      data,
    });
  }

  async delete(id: string) {
    return this.prismaService.topic.delete({
      where: { id },
    });
  }
}
