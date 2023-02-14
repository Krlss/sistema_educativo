import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreatePeriodDTO } from './dto/create-period';
import { UpdatePeriodDTO } from './dto/update-period';

@Injectable()
export class PeriodService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMany() {
    return await this.prismaService.period.findMany({
      include: {
        periodsCourses: {
          include: {
            course: true,
            period: true,
            periodsCoursesAsignatures: {
              include: {
                asignature: true,
                periodCourseAsignatureUnits: {
                  include: {
                    unit: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async get(id: string) {
    return await this.prismaService.period.findUnique({
      where: { id },
      include: {
        periodsCourses: {
          include: {
            course: true,
          },
        },
      },
    });
  }

  async getByName(name: string) {
    return await this.prismaService.period.findFirst({
      where: { name },
      include: {
        periodsCourses: {
          include: {
            course: true,
          },
        },
      },
    });
  }

  async create(data: CreatePeriodDTO) {
    const { name, ...periodsCourses } = data;
    return await this.prismaService.period.create({
      data: {
        name,
        ...(data.courses && {
          periodsCourses: {
            createMany: {
              data: periodsCourses.courses.map((courseId) => ({ courseId })),
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

  async update(data: UpdatePeriodDTO) {
    const { name, ...periodsCourses } = data;
    return await this.prismaService.period.update({
      where: { id: data.id },
      data: {
        name,
        ...(data.courses && {
          periodsCourses: {
            deleteMany: {
              periodId: data.id,
            },
            createMany: {
              data: periodsCourses.courses.map((courseId) => ({ courseId })),
              skipDuplicates: true,
            },
          },
        }),
      },
    });
  }

  async delete(id: string) {
    return await this.prismaService.period.delete({
      where: { id },
    });
  }

  async getManyByIds(ids: string[]) {
    return await this.prismaService.period.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
