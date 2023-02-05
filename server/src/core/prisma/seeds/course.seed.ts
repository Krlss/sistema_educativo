import { PrismaClient } from '@prisma/client';
import { courses } from './data/courses';

const prisma = new PrismaClient();

export const courseSeed = async (periodId: string) => {
  await prisma.course.deleteMany();
  await prisma.periodsCourses.deleteMany();

  for (const course of courses) {
    await prisma.course.create({
      data: {
        name: course.name,
        ...(course?.periods && {
          periodsCourses: {
            createMany: {
              data: {
                periodId,
              },
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
