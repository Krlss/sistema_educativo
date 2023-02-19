import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateQuestionDTO } from './dto/create-question';
import { UpdateQuestionDTO } from './dto/update-question';

@Injectable()
export class QuestionService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMany() {
    return this.prismaService.question.findMany({
      include: {
        topic: true,
      },
    });
  }

  async get(id: string) {
    return this.prismaService.question.findUnique({
      where: { id },
      include: {
        topic: true,
      },
    });
  }

  async getManyByUnit(unitId: string, asignatureId: string, periodId: string) {
    return this.prismaService.question.findMany({
      where: {
        topic: {
          periodsCoursesAsignaturesUnitsTopics: {
            some: {
              periodCourseAsignatureUnit: {
                unitId,
                periodCourseAsignature: {
                  asignatureId,
                  periodCourse: {
                    periodId,
                  },
                },
              },
            },
          },
        },
      },
      include: {
        topic: true,
      },
    });
  }

  async getManyByAsignature(asignatureId: string, periodId: string) {
    return this.prismaService.question.findMany({
      where: {
        topic: {
          periodsCoursesAsignaturesUnitsTopics: {
            some: {
              periodCourseAsignatureUnit: {
                periodCourseAsignature: {
                  asignatureId,
                  periodCourse: {
                    periodId,
                  },
                },
              },
            },
          },
        },
      },
      include: {
        topic: true,
      },
    });
  }

  async create(data: CreateQuestionDTO) {
    return this.prismaService.question.create({
      data,
    });
  }

  async update(data: UpdateQuestionDTO) {
    return this.prismaService.question.update({
      where: { id: data.id },
      data: {
        ...data,
        ...(data.topicId && { topicId: data.topicId }),
      },
    });
  }

  async delete(id: string) {
    return this.prismaService.question.delete({
      where: { id },
    });
  }
}
