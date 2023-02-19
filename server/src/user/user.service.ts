import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { User } from './entities/user.entity';
import { Course } from 'src/course/entities/course.entity';
import { PeriodsCoursesAsignatures } from 'src/courses-periods-asignatures/entities/courses-periods-asignature.entity';
import { PeriodsCoursesAsignaturesUnits } from 'src/courses-periods-asignatures-units/entities/courses-periods-asignatures-unit.entity';
import { PeriodsCourses } from 'src/courses-periods/entities/courses-period.entity';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMany() {
    return await this.prismaService.user.findMany({
      include: {
        roles: true,
      },
    });
  }

  async get(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
      include: {
        roles: true,
        progress: {
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
            periodCourseAsignatureUnit: {
              include: {
                unit: true,
              },
            },
          },
        },
      },
    });
  }

  async getStudents() {
    return await this.prismaService.user.findMany({
      where: {
        roles: {
          some: {
            name: {
              in: ['student', 'estudiante'],
            },
          },
        },
      },
      include: {
        roles: true,
        progress: {
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
            periodCourseAsignatureUnit: {
              include: {
                unit: true,
              },
            },
          },
        },
      },
    });
  }

  async create(data: CreateUserDTO) {
    return await this.prismaService.user.create({
      data: {
        ...data,
        ...(data.roles && {
          roles: {
            connect: data.roles.map((id) => ({ id })),
          },
        }),
      },
    });
  }

  async update(data: UpdateUserDTO) {
    return await this.prismaService.user.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
        ...(data.roles && {
          roles: {
            set: data.roles.map((id) => ({ id })),
          },
        }),
      },
    });
  }

  async delete(id: string) {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }

  async getManyByIds(ids: string[]) {
    return await this.prismaService.user.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  async getByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
      include: {
        roles: true,
      },
    });
  }

  async getPeriodsCoursesByUserId(id: string) {
    return await this.prismaService.period.findFirst({
      where: {
        periodsCourses: {
          some: {
            periodsCoursesAsignatures: {
              some: {
                progress: {
                  some: {
                    userId: id,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        name: 'desc',
      },
      take: 1,
      select: {
        id: true,
        name: true,
      },
    });
  }

  async getAsignaturesByUserId(id: string, periodId: string) {
    return await this.prismaService.asignature.findMany({
      where: {
        periodsCoursesAsignatures: {
          some: {
            periodCourse: {
              periodId,
            },
            progress: {
              some: {
                userId: id,
                periodCourseAsignatureId: {
                  not: null,
                },
              },
            },
          },
        },
      },
      include: {
        periodsCoursesAsignatures: {
          include: {
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
            periodCourse: true,
          },
        },
      },
    });
  }

  async getUserLastPeriod(id: string) {
    return await this.prismaService.period.findFirst({
      where: {
        periodsCourses: {
          some: {
            periodsCoursesAsignatures: {
              some: {
                progress: {
                  some: {
                    userId: id,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        name: 'desc',
      },
      take: 1,
      select: {
        id: true,
        name: true,
      },
    });
  }

  async getProgressByUserId(id: string) {
    const periodId = await this.getUserLastPeriod(id);
    const topics = await this.prismaService.topic.findMany({
      where: {
        users: {
          some: {
            id,
          },
        },
      },
      include: {
        periodsCoursesAsignaturesUnitsTopics: {
          include: {
            periodCourseAsignatureUnit: {
              include: {
                periodCourseAsignature: true,
              },
            },
            topic: true,
          },
        },
      },
    });

    const progress = await this.prismaService.progress.findMany({
      where: {
        userId: id,
        periodCourseAsignatureId: {
          not: null,
        },
        periodCourseAsignature: {
          periodCourse: {
            periodId: periodId.id,
          },
        },
      },
      include: {
        periodCourseAsignature: {
          include: {
            periodCourse: {
              include: {
                period: true,
              },
            },
            asignature: true,
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
        periodCourseAsignatureUnit: {
          include: {
            unit: true,
            periodCourseAsignatureUnitsTopic: {
              include: {
                topic: true,
              },
            },
            periodCourseAsignature: {
              include: {
                periodCourseAsignatureUnits: {
                  include: {
                    periodCourseAsignatureUnitsTopic: {
                      include: {
                        topic: true,
                      },
                    },
                  },
                },
                periodCourse: {
                  include: {
                    period: true,
                  },
                },
                asignature: true,
              },
            },
          },
        },
      },
    });

    return progress.map(
      ({
        periodCourseAsignatureId,
        periodCourseAsignature: {
          periodCourseAsignatureUnits,
          asignatureId,
          asignature,
        },
        nota,
        finished,
      }) => {
        if (periodCourseAsignatureId) {
          const topicsnumber = periodCourseAsignatureUnits.reduce(
            (acc, unit) => acc + unit.periodCourseAsignatureUnitsTopic.length,
            0,
          );
          const unitsnumber = periodCourseAsignatureUnits.length;

          const topicsfinished = periodCourseAsignatureUnits.reduce(
            (acc, { periodCourseAsignatureUnitsTopic }) =>
              acc +
              periodCourseAsignatureUnitsTopic.reduce((acc, pcautopic) => {
                if (topics.find((topic) => pcautopic.topicId === topic.id))
                  return acc + 1;
                return acc;
              }, 0),
            0,
          );

          return {
            id: asignatureId,
            nota: nota,
            name: asignature.name,
            image: asignature.image,
            percentage: Math.round(
              (topicsfinished / (topicsnumber + unitsnumber)) * 100,
            ),
            id_asignature: asignatureId,
            unit: periodCourseAsignatureUnits.map(({ unitId, unit }) => {
              return {
                id: unitId,
                name: unit.name,
                id_asignature: asignatureId,
                nota: nota,
                finished: finished,
                topic: topics
                  .map(({ periodsCoursesAsignaturesUnitsTopics, id }) => {
                    const { topic, topicId, periodCourseAsignatureUnit } =
                      periodsCoursesAsignaturesUnitsTopics.find(
                        (topic_) => topic_.topicId === id,
                      );

                    if (
                      periodCourseAsignatureUnit.unitId === unitId &&
                      asignatureId ===
                        periodCourseAsignatureUnit.periodCourseAsignature
                          .asignatureId
                    )
                      return {
                        id: topicId,
                        id_asignature: asignatureId,
                        id_unit: unitId,
                        finished: true,
                        name: topic.name,
                        image: topic.image,
                        video: topic.video,
                      };
                  })
                  .filter((f) => f),
              };
            }),
          };
        }
      },
    );
  }

  async getAsignatureByUserId(id: string, asignatureId: string) {
    const period = await this.getPeriodsCoursesByUserId(id);

    return await this.prismaService.asignature.findUnique({
      where: {
        id: asignatureId,
      },
      include: {
        periodsCoursesAsignatures: {
          where: {
            periodCourse: {
              periodId: period?.id,
            },
            progress: {
              some: {
                userId: id,
                periodCourseAsignatureId: {
                  not: null,
                },
              },
            },
          },
          include: {
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

  async updateUserTopic(userId: string, topicId: string) {
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        topics: {
          connect: {
            id: topicId,
          },
        },
      },
    });
    return true;
  }
}
