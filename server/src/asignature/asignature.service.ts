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
    const { periodsCourses, units, ...others } = data;
    const newAsignature = await this.prismaService.asignature.create({
      data: {
        ...others,
        ...(periodsCourses && {
          periodsCoursesAsignatures: {
            createMany: {
              data: periodsCourses.map((periodCourseId) => ({
                periodCourseId,
              })),
            },
          },
        }),
      },
      include: {
        periodsCoursesAsignatures: true,
      },
    });

    if (units && units.length > 0) {
      units.forEach((element) => {
        newAsignature.periodsCoursesAsignatures.forEach(
          async (periodCourseAsignature) => {
            await this.prismaService.periodsCoursesAsignaturesUnits.create({
              data: {
                periodCourseAsignatureId: periodCourseAsignature.id,
                unitId: element,
              },
            });
          },
        );
      });
    }

    return newAsignature;
  }

  async update(data: UpdateAsignatureDTO) {
    const { name, description, image, units, periodsCourses } = data;
    const updatedAsignature = await this.prismaService.asignature.update({
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
        ...(name && { name }),
        ...(description && { description }),
        ...(image && { image }),
      },
      include: {
        periodsCoursesAsignatures: true,
      },
    });

    if (units && units.length > 0) {
      updatedAsignature.periodsCoursesAsignatures.forEach(
        async (periodCourseAsignature) => {
          await this.prismaService.periodsCoursesAsignaturesUnits.deleteMany({
            where: {
              periodCourseAsignatureId: periodCourseAsignature.id,
            },
          });
        },
      );

      units.forEach((element) => {
        updatedAsignature.periodsCoursesAsignatures.forEach(
          async (periodCourseAsignature) => {
            await this.prismaService.periodsCoursesAsignaturesUnits.create({
              data: {
                periodCourseAsignatureId: periodCourseAsignature.id,
                unitId: element,
              },
            });
          },
        );
      });
    }

    return updatedAsignature;
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
