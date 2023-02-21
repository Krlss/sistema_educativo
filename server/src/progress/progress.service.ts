import { Injectable } from '@nestjs/common';
import { CreateProgressDTO } from './dto/create-progress';
import { UpdateProgressDTO } from './dto/update-progress';
import { PrismaService } from 'src/core/prisma/prisma.service';

interface ProgressUpdateInput {
  userId: string;
  periodId: string;
  asignatureId: string;
  unitId?: string;
  questions: string;
  nota: number;
}

@Injectable()
export class ProgressService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateProgressDTO) {
    return this.prismaService.progress.create({
      data: {
        ...(data.periodsCoursesAsignaturesId && {
          periodCourseAsignature: {
            connect: {
              id: data.periodsCoursesAsignaturesId,
            },
          },
        }),
        ...(data.periodCourseAsignatureUnitId && {
          periodCourseAsignatureUnit: {
            connect: {
              id: data.periodCourseAsignatureUnitId,
            },
          },
        }),
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
  }

  getMany() {
    return `This action returns all progress`;
  }

  get(id: number) {
    return `This action returns a #${id} progress`;
  }

  async updateAsignature(data: ProgressUpdateInput) {
    const progress = await this.prismaService.progress.findFirst({
      where: {
        userId: data.userId,
        periodCourseAsignature: {
          periodCourse: {
            period: {
              id: data.periodId,
            },
          },
          asignatureId: data.asignatureId,
        },
      },
    });

    if (!progress) {
      return false;
    }
    await this.prismaService.progress.update({
      where: {
        id: progress.id,
      },
      data: {
        questions: data.questions,
        nota: data.nota,
        finished: true,
      },
    });
    return true;
  }

  async updateUnit(data: ProgressUpdateInput) {
    const progress = await this.prismaService.progress.findFirst({
      where: {
        userId: data.userId,
        periodCourseAsignatureUnit: {
          periodCourseAsignature: {
            periodCourse: {
              periodId: data.periodId,
            },
            asignatureId: data.asignatureId,
          },
          unitId: data.unitId,
        },
      },
    });

    if (!progress) {
      return false;
    }
    await this.prismaService.progress.update({
      where: {
        id: progress.id,
      },
      data: {
        questions: data.questions,
        nota: data.nota,
        finished: true,
      },
    });
    return true;
  }

  remove(id: number) {
    return `This action removes a #${id} progress`;
  }
}
