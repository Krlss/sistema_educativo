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
        coursesPeriods: {
          include: {
            course: true,
          },
        },
      },
    });
  }

  async get(id: string) {
    return await this.prismaService.period.findUnique({
      where: { id },
      include: {
        coursesPeriods: {
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
        coursesPeriods: {
          include: {
            course: true,
          },
        },
      },
    });
  }

  async create(data: CreatePeriodDTO) {
    const { name, ...coursesPeriods } = data;
    return await this.prismaService.period.create({
      data: {
        name,
        ...(data.courses && {
          coursesPeriods: {
            createMany: {
              data: coursesPeriods.courses.map((courseId) => ({ courseId })),
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

  async update(data: UpdatePeriodDTO) {
    return await this.prismaService.period.update({
      where: { id: data.id },
      data: {
        ...data,
        ...(data.courses && {
          courses: {
            deleteMany: {
              periodId: data.id,
            },
            createMany: {
              data: data.courses.map((courseId) => ({ courseId })),
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

  async getManyByArrayIds(ids: string[]) {
    return await this.prismaService.period.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
