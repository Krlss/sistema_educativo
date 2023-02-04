import { Injectable } from '@nestjs/common';
import { CreateUnitDTO } from './dto/create-unit';
import { UpdateUnitDTO } from './dto/update-unit';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class UnitService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMany() {
    return await this.prismaService.unit.findMany({
      include: {
        periodsCoursesAsignaturesUnits: {
          include: {
            periodCourseAsignature: {
              include: {
                asignature: true,
                periodCourse: {
                  include: {
                    course: true,
                    period: true,
                  },
                },
              },
            },
            unit: true,
            progress: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });
  }

  async getManyByIds(ids: string[]) {
    return await this.prismaService.unit.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        periodsCoursesAsignaturesUnits: {
          include: {
            periodCourseAsignature: {
              include: {
                asignature: true,
                periodCourse: {
                  include: {
                    course: true,
                    period: true,
                  },
                },
              },
            },
            unit: true,
            progress: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });
  }

  async get(id: string) {
    return this.prismaService.unit.findUnique({
      where: {
        id,
      },
      include: {
        periodsCoursesAsignaturesUnits: {
          include: {
            periodCourseAsignature: {
              include: {
                asignature: true,
                periodCourse: {
                  include: {
                    course: true,
                    period: true,
                  },
                },
              },
            },
            unit: true,
            progress: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });
  }

  async getByName(name: string) {
    return await this.prismaService.unit.findFirst({
      where: {
        name,
      },
    });
  }

  async create(data: CreateUnitDTO) {
    const { periodsCoursesAsignature, ...others } = data;
    return await this.prismaService.unit.create({
      data: {
        ...others,
        ...(periodsCoursesAsignature && {
          periodsCoursesAsignaturesUnits: {
            create: periodsCoursesAsignature.map(
              (periodCourseAsignatureId) => ({
                periodCourseAsignatureId,
              }),
            ),
          },
        }),
      },
    });
  }

  async update(data: UpdateUnitDTO) {
    const { periodsCoursesAsignature, ...others } = data;
    return await this.prismaService.unit.update({
      where: {
        id: data.id,
      },
      data: {
        ...others,
        ...(periodsCoursesAsignature && {
          periodsCoursesAsignaturesUnits: {
            deleteMany: {
              unitId: data.id,
            },
            createMany: {
              data: periodsCoursesAsignature.map(
                (periodCourseAsignatureId) => ({
                  periodCourseAsignatureId,
                }),
              ),
            },
          },
        }),
      },
    });
  }

  async delete(id: string) {
    return `This action removes a #${id} unit`;
  }
}
