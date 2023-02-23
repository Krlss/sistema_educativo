import { PrismaClient } from '@prisma/client';
import { questions } from './data/questions';
import { QuestionDifficulty } from '../../../question/types/question.difficulty';
import { QuestionType } from '../../../question/types/question.type';

const prisma = new PrismaClient();

export const quesitonSeed = async () => {
  await prisma.question.deleteMany();

  for (const question of questions) {
    const qtype = question.type;
    let difficulty = QuestionDifficulty.high;
    if (
      qtype === QuestionType.choose_an_option ||
      qtype === QuestionType.true_or_false ||
      qtype === QuestionType.choose_an_option_textnumber ||
      qtype === QuestionType.choose_any_option ||
      qtype === QuestionType.true_or_false_numbers_and_text ||
      qtype === QuestionType.write_value_from_text
    ) {
      difficulty = QuestionDifficulty.low;
    }
    await prisma.question.create({
      data: {
        title: question.title,
        ...(question.subtitle && { subtitle: question.subtitle }),
        type: question.type,
        options: question.options,
        difficulty,
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
