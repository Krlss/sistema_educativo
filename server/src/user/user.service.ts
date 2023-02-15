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

  async getAsignaturesByUserId(id: string) {
    const period = await this.getPeriodsCoursesByUserId(id);

    return await this.prismaService.asignature.findMany({
      where: {
        periodsCoursesAsignatures: {
          some: {
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
          },
        },
      },
    });
  }

  async getUserLastPeriod(id: string) {
    return await this.prismaService.progress.findMany({
      where: {
        userId: id,
      },
      include: {
        periodCourseAsignature: {
          include: {
            periodCourse: {
              include: {
                period: true,
              },
            },
          },
        },
        periodCourseAsignatureUnit: {
          include: {
            periodCourseAsignature: {
              include: {
                periodCourse: {
                  include: {
                    period: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async getProgressByUserId(id: string) {
    const period = await this.getUserLastPeriod(id);
    const topics = await this.prismaService.topic.findMany({
      where: {
        users: {
          some: {
            id,
          },
        },
      },
    });
    console.log(topics);
    const progress = await this.prismaService.progress.findMany({
      where: {
        userId: id,
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
    // console.log(data);

    const asignatures = [];
    progress.forEach((item) => {
      if (item.periodCourseAsignatureId) {
        asignatures.push({
          id: item.id,
          nota: item.nota,
          id_asignature: item.periodCourseAsignature.asignatureId,
          unit: [],
        });
      }
    });
    const units = [];
    progress.forEach((item) => {
      if (item.periodCourseAsignatureUnitId) {
        units.push({
          id: item.id,
          nota: item.nota,
          id_unit: item.periodCourseAsignatureUnit.unitId,
          id_asignature:
            item.periodCourseAsignatureUnit.periodCourseAsignature.asignatureId,
          finished: item.finished,
          topic: [],
        });
      }
    });
    topics.forEach((item) => {
      units.forEach((unit) => {
        if (item.id === unit.id_unit) {
          unit.topic.push({ id: item.id, id_topic: item.id, finished: true });
        }
      });
    });
    asignatures.forEach((item) => {
      units.forEach((unit) => {
        if (item.id_asignature === unit.id_asignature) {
          item.unit.push(unit);
        }
      });
    });
    return asignatures;
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
}
