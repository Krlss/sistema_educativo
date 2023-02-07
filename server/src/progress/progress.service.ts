import { Injectable } from '@nestjs/common';
import { CreateProgressDTO } from './dto/create-progress';
import { UpdateProgressDTO } from './dto/update-progress';
import { PrismaService } from 'src/core/prisma/prisma.service';

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

  update(id: number, updateProgressInput: UpdateProgressDTO) {
    return `This action updates a #${id} progress`;
  }

  remove(id: number) {
    return `This action removes a #${id} progress`;
  }
}
