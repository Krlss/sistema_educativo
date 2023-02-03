import { Injectable } from '@nestjs/common';
import { CreateAsignatureDTO } from './dto/create-asignature';
import { UpdateAsignatureDTO } from './dto/update-asignature';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class AsignatureService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMany() {
    return await this.prismaService.asignature.findMany({
      include: {
        coursesPeriodsAsignatures: {
          include: {
            asignature: true,
            coursePeriod: {
              include: {
                course: true,
                period: true,
              },
            },
            periodCourseAsignatureUnit: {
              include: {
                unit: true,
              },
            },
          },
        },
      },
    });
  }

  async get(id: string) {
    return await this.prismaService.asignature.findUnique({
      where: { id },
      include: {
        coursesPeriodsAsignatures: {
          include: {
            asignature: true,
            coursePeriod: {
              include: {
                course: true,
                period: true,
              },
            },
            periodCourseAsignatureUnit: {
              include: {
                unit: true,
              },
            },
          },
        },
      },
    });
  }

  async create(data: CreateAsignatureDTO) {
    return await this.prismaService.asignature.create({
      data,
    });
  }

  async update(data: UpdateAsignatureDTO) {
    const find = await this.get(data.id);
    if (!find) throw new Error('No se encontró el asignatura');

    return await this.prismaService.asignature.update({
      where: { id: data.id },
      data,
    });
  }

  async delete(id: string) {
    const find = await this.get(id);
    if (!find) throw new Error('No se encontró el asignatura');
    return await this.prismaService.asignature.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
