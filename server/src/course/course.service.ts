import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateCourseDTO } from './dto/create-course';
import { UpdateCourseDTO } from './dto/update.course';

@Injectable()
export class CourseService {
  constructor(private readonly prismaService: PrismaService) {}
  async getMany() {
    return await this.prismaService.course.findMany({
      include: {
        coursesPeriods: {
          include: {
            period: true,
          },
        },
      },
    });
  }

  async get(id: string) {
    return await this.prismaService.course.findUnique({
      where: { id },
      include: {
        coursesPeriods: {
          include: {
            period: true,
          },
        },
      },
    });
  }

  async create(data: CreateCourseDTO) {
    const { name, ...coursesPeriods } = data;
    return await this.prismaService.course.create({
      data: {
        name,
        ...(data.periods && {
          coursesPeriods: {
            createMany: {
              data: coursesPeriods.periods.map((periodId) => ({ periodId })),
            },
          },
        }),
      },
      include: {
        coursesPeriods: {
          include: {
            course: true,
            period: true,
          },
        },
      },
    });
  }

  async update(data: UpdateCourseDTO) {
    const { name, ...coursesPeriods } = data;
    return await this.prismaService.course.update({
      where: { id: data.id },
      data: {
        name,
        ...(data.periods && {
          coursesPeriods: {
            deleteMany: {
              courseId: data.id,
            },
            createMany: {
              data: coursesPeriods.periods.map((periodId) => ({ periodId })),
              skipDuplicates: true,
            },
          },
        }),
      },
    });
  }

  async delete(id: string) {
    return await this.prismaService.course.delete({
      where: { id },
    });
  }

  async getByName(name: string) {
    return await this.prismaService.course.findFirst({
      where: { name },
    });
  }

  async getManyByIds(ids: string[]) {
    return await this.prismaService.course.findMany({
      where: { id: { in: ids } },
    });
  }
}
