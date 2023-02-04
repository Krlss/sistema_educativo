import { Injectable } from '@nestjs/common';
import { CoursesPeriodsService } from 'src/courses-periods/courses-periods.service';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { FindByPeriodAndCourseDTO } from './dto/findByPeriodAndCourse';

@Injectable()
export class CoursesPeriodsAsignaturesService {
  constructor(
    private readonly CPService: CoursesPeriodsService,
    private readonly prismaService: PrismaService,
  ) {}

  async getAll() {
    return this.prismaService.coursesPeriodsAsignatures.findMany({
      include: {
        asignature: true,
        coursePeriod: {
          include: {
            course: true,
            period: true,
          },
        },
      },
    });
  }

  async get(id: number) {
    return this.prismaService.coursesPeriodsAsignatures.findUnique({
      where: {
        id,
      },
      include: {
        asignature: true,
        coursePeriod: {
          include: {
            course: true,
            period: true,
          },
        },
      },
    });
  }

  async getByPeriodId_CourseId(data: FindByPeriodAndCourseDTO) {
    const coursePeriodId = await this.CPService.getID_byCoursePeriod(
      data.periodId,
      data.courseId,
    );
    if (!coursePeriodId) throw new Error('Ese curso no existe en ese periodo');

    return this.prismaService.coursesPeriodsAsignatures.findMany({
      where: {
        coursePeriodId: coursePeriodId.id,
      },
      include: {
        asignature: true,
        coursePeriod: {
          include: {
            course: true,
            period: true,
          },
        },
      },
    });
  }
}
