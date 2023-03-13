import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateCourseDTO } from './dto/create-course';
import { UpdateCourseDTO } from './dto/update.course';

@Injectable()
export class CourseService {
  constructor(private readonly prismaService: PrismaService) {}
  async getMany() {
    return await this.prismaService.course.findMany({
      include: {
        periodsCourses: {
          include: {
            period: true,
            periodsCoursesAsignatures: {
              include: {
                asignature: true,
              },
            },
          },
        },
      },
    });
  }

  async get(id: string) {
    return await this.prismaService.course.findUnique({
      where: { id },
      include: {
        periodsCourses: {
          include: {
            period: true,
          },
        },
      },
    });
  }

  async create(data: CreateCourseDTO) {
    const { name, periods, asignatures } = data;
    const newCourse = await this.prismaService.course.create({
      data: {
        name,
        ...(periods && {
          periodsCourses: {
            createMany: {
              data: periods.map((periodId) => ({ periodId })),
            },
          },
        }),
      },
      include: {
        periodsCourses: {
          include: {
            course: true,
            period: true,
            periodsCoursesAsignatures: {
              include: {
                asignature: true,
              },
            },
          },
        },
      },
    });

    if (asignatures && asignatures.length > 0) {
      const periodsCourses = await this.prismaService.periodsCourses.findMany({
        where: {
          courseId: newCourse.id,
        },
      });

      asignatures.forEach(async (asignatureId) => {
        periodsCourses.forEach(async ({ id }) => {
          await this.prismaService.periodsCoursesAsignatures.create({
            data: {
              periodCourseId: id,
              asignatureId,
            },
          });
        });
      });
    }

    return newCourse;
  }

  async update(data: UpdateCourseDTO) {
    const { name, periods, asignatures } = data;
    const updateCourse = await this.prismaService.course.update({
      where: { id: data.id },
      data: {
        name,
        ...(periods && {
          periodsCourses: {
            deleteMany: {
              courseId: data.id,
            },
            createMany: {
              data: periods.map((periodId) => ({ periodId })),
              skipDuplicates: true,
            },
          },
        }),
      },
    });

    if (asignatures && asignatures.length > 0) {
      const periodsCourses = await this.prismaService.periodsCourses.findMany({
        where: {
          courseId: updateCourse.id,
        },
      });

      periodsCourses.forEach(async ({ id }) => {
        await this.prismaService.periodsCoursesAsignatures.deleteMany({
          where: {
            periodCourseId: id,
          },
        });
      });

      asignatures.forEach(async (asignatureId) => {
        periodsCourses.forEach(async ({ id }) => {
          await this.prismaService.periodsCoursesAsignatures.create({
            data: {
              periodCourseId: id,
              asignatureId,
            },
          });
        });
      });
    }
  }

  async delete(id: string) {
    return await this.prismaService.course.delete({
      where: { id },
    });
  }

  async getByName(name: string) {
    return await this.prismaService.course.findFirst({
      where: { name },
    });
  }

  async getManyByIds(ids: string[]) {
    return await this.prismaService.course.findMany({
      where: { id: { in: ids } },
    });
  }
}
