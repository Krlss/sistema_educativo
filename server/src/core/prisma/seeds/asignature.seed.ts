import { PrismaClient } from '@prisma/client';
import { asignatures } from './data/asignatures';

const prisma = new PrismaClient();

export const asignatureSeed = async (periodCourseId: number) => {
  await prisma.asignature.deleteMany();
  await prisma.periodsCoursesAsignatures.deleteMany();

  for (const asignature of asignatures) {
    await prisma.asignature.create({
      data: {
        name: asignature.name,
        description: asignature.description,
        image: asignature.image,
        periodsCoursesAsignatures: {
          createMany: {
            data: {
              periodCourseId,
            },
          },
        },
      },
    });
  }

  console.log('Asignature created: ', asignatures.length);
  prisma.$disconnect();

  return await prisma.periodsCoursesAsignatures.findMany({
    where: {
      periodCourseId,
    },
    select: {
      id: true,
    },
  });
};
