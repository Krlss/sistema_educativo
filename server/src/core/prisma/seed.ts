import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { periodSeed } from './seeds/period.seed';
import { usersSeed } from './seeds/users.seed';
import { roleSeed } from './seeds/roles.seed';
import { courseSeed } from './seeds/course.seed';
import { asignatureSeed } from './seeds/asignature.seed';
import { unitSeed } from './seeds/unit.seed';
import { topicSeed } from './seeds/topic.seed';
import { quesitonSeed } from './seeds/question.seed';

async function main() {
  await roleSeed();
  await usersSeed();
  const period = await periodSeed();
  await courseSeed(period);

  const periodsCourses = await prisma.periodsCourses.findMany({
    where: {
      periodId: { in: period.map((p) => p.id) },
    },
    select: {
      id: true,
    },
  });
  const periodsCoursesAsignatures = await asignatureSeed(
    periodsCourses.map((pc) => pc.id),
  );
  await unitSeed(periodsCoursesAsignatures);
  await topicSeed(period);

  // await quesitonSeed();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
