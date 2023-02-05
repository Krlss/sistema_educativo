import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const period_ = {
  name: '2022-2023',
};

export const periodSeed = async () => {
  await prisma.period.deleteMany();

  const period = await prisma.period.create({
    data: period_,
    select: {
      id: true,
    },
  });

  console.log('Periods created: ', period);
  prisma.$disconnect();

  return period;
};
