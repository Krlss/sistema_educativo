import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class CoursesPeriodsService {
  constructor(private readonly prismaService: PrismaService) {}

  get(id: number) {
    return this.prismaService.coursesPeriods.findUnique({
      where: {
        id,
      },
      include: {
        course: true,
        period: true,
      },
    });
  }

  getMany() {
    return this.prismaService.coursesPeriods.findMany({
      include: {
        course: true,
        period: true,
      },
    });
  }

  getByCourseId(courseId: string) {
    return this.prismaService.coursesPeriods.findMany({
      where: {
        courseId,
      },
      include: {
        course: true,
        period: true,
      },
    });
  }

  getByPeriodId(periodId: string) {
    return this.prismaService.coursesPeriods.findMany({
      where: {
        periodId,
      },
      include: {
        course: true,
        period: true,
      },
    });
  }
}
