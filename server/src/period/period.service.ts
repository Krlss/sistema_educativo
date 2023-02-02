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
        courses: {
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
        courses: {
          include: {
            course: true,
          },
        },
      },
    });
  }

  async create(data: CreatePeriodDTO) {
    return await this.prismaService.period.create({
      data: {
        ...data,
        ...(data.courses && {
          courses: {
            createMany: {
              data: data.courses.map((courseId) => ({ courseId })),
            },
          },
        }),
      },
    });
  }

  async update(data: UpdatePeriodDTO) {
    const find = await this.get(data.id);
    if (!find) throw new Error('No se encontró el periodo');

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
    const find = await this.get(id);
    if (!find) throw new Error('No se encontró el periodo');
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
