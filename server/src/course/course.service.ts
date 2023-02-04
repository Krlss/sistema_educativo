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
        periodsCourses: {
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
        periodsCourses: {
          include: {
            period: true,
          },
        },
      },
    });
  }

  async create(data: CreateCourseDTO) {
    const { name, ...periodsCourses } = data;
    return await this.prismaService.course.create({
      data: {
        name,
        ...(data.periods && {
          periodsCourses: {
            createMany: {
              data: periodsCourses.periods.map((periodId) => ({ periodId })),
            },
          },
        }),
      },
      include: {
        periodsCourses: {
          include: {
            course: true,
            period: true,
          },
        },
      },
    });
  }

  async update(data: UpdateCourseDTO) {
    const { name, ...periodsCourses } = data;
    return await this.prismaService.course.update({
      where: { id: data.id },
      data: {
        name,
        ...(data.periods && {
          periodsCourses: {
            deleteMany: {
              courseId: data.id,
            },
            createMany: {
              data: periodsCourses.periods.map((periodId) => ({ periodId })),
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
