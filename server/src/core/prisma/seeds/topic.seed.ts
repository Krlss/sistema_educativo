import { PrismaClient } from '@prisma/client';
import { topics } from './data/topics';

const prisma = new PrismaClient();

export const topicSeed = async () => {
  await prisma.topic.deleteMany();

  for (const topic of topics) {
    const periodCourseAsignatureUnitId =
      await prisma.periodsCoursesAsignaturesUnits.findFirst({
        where: {
          unit: {
            name: topic.unit,
          },
          periodCourseAsignature: {
            asignature: {
              name: topic.asignature,
            },
            periodCourse: {
              course: {
                name: 'Quinto',
              },
              period: {
                name: '2022-2023',
              },
            },
          },
        },
        select: {
          id: true,
        },
      });
    await prisma.topic.create({
      data: {
        name: topic.name,
        ...(topic.image && { image: topic.image }),
        ...(topic.video && { video: topic.video }),
        periodsCoursesAsignaturesUnitsTopics: {
          create: {
            periodCourseAsignatureUnitId: periodCourseAsignatureUnitId.id,
          },
        },
      },
    });
  }

  console.log('topics created: ', topics.length);
  prisma.$disconnect();
};
