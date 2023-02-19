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
        periodsCoursesAsignatures: {
          include: {
            periodCourse: {
              include: {
                course: true,
                period: true,
              },
            },
            periodCourseAsignatureUnits: {
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
        periodsCoursesAsignatures: {
          include: {
            asignature: true,
            periodCourse: {
              include: {
                course: true,
                period: true,
              },
            },
            periodCourseAsignatureUnits: {
              include: {
                unit: true,
                periodCourseAsignatureUnitsTopic: {
                  include: {
                    topic: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async getAsignatureByPeriod(id: string) {
    return await this.prismaService.asignature.findMany({
      where: {
        periodsCoursesAsignatures: {
          some: {
            periodCourse: {
              period: {
                id,
              },
            },
          },
        },
      },
    });
  }

  async getTopicsByAsignatureAndUser(
    id: string,
    userId: string,
    unitId: string,
  ) {
    return await this.prismaService.asignature.findUnique({
      where: { id },
      include: {
        periodsCoursesAsignatures: {
          include: {
            periodCourse: true,
            periodCourseAsignatureUnits: {
              where: {
                unitId,
              },
              include: {
                progress: {
                  where: {
                    userId,
                  },
                },
                unit: true,
                periodCourseAsignatureUnitsTopic: {
                  include: {
                    topic: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async create(data: CreateAsignatureDTO) {
    const { periodsCourses, ...others } = data;
    return await this.prismaService.asignature.create({
      data: {
        ...others,
        periodsCoursesAsignatures: {
          createMany: {
            data: periodsCourses.map((periodCourseId) => ({
              periodCourseId,
            })),
          },
        },
      },
    });
  }

  async update(data: UpdateAsignatureDTO) {
    const { name, periodsCourses } = data;
    return await this.prismaService.asignature.update({
      where: { id: data.id },
      data: {
        periodsCoursesAsignatures: {
          deleteMany: { asignatureId: data.id },
          createMany: {
            data: periodsCourses.map((periodCourseId) => ({
              periodCourseId,
            })),
          },
        },
        name,
      },
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
