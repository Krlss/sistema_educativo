import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const period_ = [
  {
    name: '2022-2023',
  },
  {
    name: '2023-2024',
  },
];

export const periodSeed = async () => {
  await prisma.period.deleteMany();

  await prisma.period.createMany({
    data: period_,
  });

  const period = await prisma.period.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  console.log('Periods created: ', period_.length);
  prisma.$disconnect();

  return period;
};
