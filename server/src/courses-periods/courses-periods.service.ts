import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class PeriodsCoursesService {
  constructor(private readonly prismaService: PrismaService) {}

  async get(id: number) {
    return this.prismaService.periodsCourses.findUnique({
      where: {
        id,
      },
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
            periodCourse: {
              include: {
                course: true,
                period: true,
              },
            },
            progress: {
              include: {
                periodCourseAsignatureUnit: {
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

  async getMany() {
    return this.prismaService.periodsCourses.findMany({
      include: {
        course: true,
        period: true,
      },
    });
  }

  async getManyByIds(ids: number[]) {
    return this.prismaService.periodsCourses.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  async getByCourseId(courseId: string) {
    return this.prismaService.periodsCourses.findMany({
      where: {
        courseId,
      },
      include: {
        course: true,
        period: true,
      },
    });
  }

  async getByPeriodId(periodId: string) {
    return this.prismaService.periodsCourses.findMany({
      where: {
        periodId,
      },
      include: {
        course: true,
        period: true,
      },
    });
  }

  async getID_byCoursePeriod(periodId: string, courseId: string) {
    return this.prismaService.periodsCourses.findFirst({
      where: {
        courseId,
        periodId,
      },
      select: {
        id: true,
      },
    });
  }
}
