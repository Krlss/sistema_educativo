import { Injectable } from '@nestjs/common';
import { CreateCoursePeriodsAsignaturesUnitsTopicInput } from './dto/create-course-periods-asignatures-units-topic.input';
import { UpdateCoursePeriodsAsignaturesUnitsTopicInput } from './dto/update-course-periods-asignatures-units-topic.input';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class CoursePeriodsAsignaturesUnitsTopicService {
  constructor(private readonly prismaService: PrismaService) {}
  getMany() {
    return this.prismaService.periodsCoursesAsignaturesUnitsTopics.findMany({
      include: {
        periodCourseAsignatureUnit: {
          include: {
            periodCourseAsignature: {
              include: {
                periodCourse: {
                  include: {
                    period: true,
                    course: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  get(id: number) {
    return this.prismaService.periodsCoursesAsignaturesUnitsTopics.findUnique({
      where: { id },
      include: {
        periodCourseAsignatureUnit: {
          include: {
            periodCourseAsignature: {
              include: {
                periodCourse: {
                  include: {
                    period: true,
                    course: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
