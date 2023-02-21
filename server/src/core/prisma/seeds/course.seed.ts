import { Prisma, PrismaClient } from '@prisma/client';
import { courses } from './data/courses';

const prisma = new PrismaClient();

export const courseSeed = async (
  period: {
    id: string;
    name: string;
  }[],
) => {
  await prisma.course.deleteMany();
  await prisma.periodsCourses.deleteMany();

  for (const course of courses) {
    await prisma.course.create({
      data: {
        name: course.name,
        ...(course?.periods && {
          periodsCourses: {
            createMany: {
              data: course.periods.map(({ name }) => {
                const period_ = period.find((p) => p.name === name);
                return {
                  periodId: period_.id,
                };
              }),
            },
          },
        }),
      },
      include: {
        periodsCourses: true,
      },
    });
  }
  console.log('Course created: ', courses.length);
  prisma.$disconnect();
};
