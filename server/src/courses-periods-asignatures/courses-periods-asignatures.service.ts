import { Injectable } from '@nestjs/common';
import { PeriodsCoursesService } from 'src/courses-periods/courses-periods.service';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { FindByPeriodAndCourseDTO } from './dto/findByPeriodAndCourse';

@Injectable()
export class PeriodsCoursesAsignaturesService {
  constructor(
    private readonly CPService: PeriodsCoursesService,
    private readonly prismaService: PrismaService,
  ) {}

  async getAll() {
    return this.prismaService.periodsCoursesAsignatures.findMany({
      include: {
        asignature: true,
        periodCourse: {
          include: {
            course: true,
            period: true,
          },
        },
      },
    });
  }

  async get(id: number) {
    return this.prismaService.periodsCoursesAsignatures.findUnique({
      where: {
        id,
      },
      include: {
        asignature: true,
        periodCourse: {
          include: {
            course: true,
            period: true,
          },
        },
      },
    });
  }

  async getByPeriodId_CourseId(data: FindByPeriodAndCourseDTO) {
    const periodCourseId = await this.CPService.getID_byCoursePeriod(
      data.periodId,
      data.courseId,
    );
    if (!periodCourseId) throw new Error('Ese curso no existe en ese periodo');

    return this.prismaService.periodsCoursesAsignatures.findMany({
      where: {
        periodCourseId: periodCourseId.id,
      },
      include: {
        asignature: true,
        periodCourse: {
          include: {
            course: true,
            period: true,
          },
        },
      },
    });
  }
}
