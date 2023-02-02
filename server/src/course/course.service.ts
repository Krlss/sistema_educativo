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
        periods: {
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
        periods: {
          include: {
            period: true,
          },
        },
      },
    });
  }

  async create(data: CreateCourseDTO) {
    return await this.prismaService.course.create({
      data: {
        ...data,
        ...(data.periods && {
          periods: {
            createMany: {
              data: data.periods.map((periodId) => ({ periodId })),
            },
          },
        }),
      },
    });
  }

  async update(data: UpdateCourseDTO) {
    const find = await this.get(data.id);
    if (!find) throw new Error('No se encontró el curso');

    return await this.prismaService.course.update({
      where: { id: data.id },
      data: {
        ...data,
        ...(data.periods && {
          periods: {
            deleteMany: {
              courseId: data.id,
            },
            createMany: {
              data: data.periods.map((periodId) => ({ periodId })),
              skipDuplicates: true,
            },
          },
        }),
      },
    });
  }

  async delete(id: string) {
    const find = await this.get(id);
    if (!find) throw new Error('No se encontró el curso');
    return await this.prismaService.course.delete({
      where: { id },
    });
  }
}
