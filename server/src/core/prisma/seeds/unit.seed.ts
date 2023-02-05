import { PrismaClient } from '@prisma/client';
import { Logger } from '@nestjs/common';
import { units } from './data/units';
const prisma = new PrismaClient();

interface unitSeed {
  id: number;
}

export const unitSeed = async (ids: unitSeed[]) => {
  const periodCourseAsignatureId = ids.map((id) => id.id);

  await prisma.unit.deleteMany();

  for (const unit of units) {
    await prisma.unit.create({
      data: {
        name: unit.name,
        periodsCoursesAsignaturesUnits: {
          createMany: {
            data: periodCourseAsignatureId.map((periodCourseAsignatureId) => ({
              periodCourseAsignatureId,
            })),
          },
        },
      },
    });
  }

  Logger.log('units created: ', units.length);
  prisma.$disconnect();
};
