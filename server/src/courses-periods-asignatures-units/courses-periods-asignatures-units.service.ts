import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class PeriodsCoursesAsignaturesUnitsService {
  constructor(private readonly prismaService: PrismaService) {}
  async getMany() {
    return await this.prismaService.periodsCoursesAsignaturesUnits.findMany({
      include: {
        periodCourseAsignature: {
          include: {
            asignature: true,
          },
        },
        unit: true,
      },
    });
  }

  async get(id: number) {
    return await this.prismaService.periodsCoursesAsignaturesUnits.findUnique({
      where: {
        id,
      },
      include: {
        periodCourseAsignature: {
          include: {
            asignature: true,
          },
        },
        unit: true,
      },
    });
  }

  async getManyByIds(ids: number[]) {
    return await this.prismaService.periodsCoursesAsignaturesUnits.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        periodCourseAsignature: {
          include: {
            asignature: true,
          },
        },
        unit: true,
      },
    });
  }

  async getManyByCoursePeriodAsignature(periodCourseAsignatureId: number) {
    return await this.prismaService.periodsCoursesAsignaturesUnits.findMany({
      where: {
        periodCourseAsignatureId,
      },
      include: {
        periodCourseAsignature: {
          include: {
            asignature: true,
          },
        },
        unit: true,
      },
    });
  }

  async getByCoursePeriodAsignature_Unit(
    unitId: string,
    periodCourseAsignatureId: number,
  ) {
    return await this.prismaService.periodsCoursesAsignaturesUnits.findFirst({
      where: {
        unitId,
        periodCourseAsignatureId,
      },
      include: {
        periodCourseAsignature: {
          include: {
            asignature: true,
          },
        },
        unit: true,
      },
    });
  }
}
