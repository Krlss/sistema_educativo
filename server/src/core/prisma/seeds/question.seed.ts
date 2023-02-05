import { PrismaClient } from '@prisma/client';
import { questions } from './data/questions';

const prisma = new PrismaClient();

export const quesitonSeed = async () => {
  await prisma.question.deleteMany();

  for (const question of questions) {
    await prisma.question.create({
      data: {
        title: question.title,
        ...(question.subtitle && { subtitle: question.subtitle }),
        type: question.type,
        options: question.options,
        topic: {
          create: {
            name: question.topic,
          },
        },
      },
    });
  }

  console.log('question created: ', questions.length);
  prisma.$disconnect();
};
