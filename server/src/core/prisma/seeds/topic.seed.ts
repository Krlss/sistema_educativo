import { PrismaClient } from '@prisma/client';
import { topics } from './data/topics';
import { questions } from './data/questions';
import { QuestionDifficulty } from '../../../question/types/question.difficulty';
import { QuestionType } from '../../../question/types/question.type';

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
    const questions_ = questions.filter((q) => q.topic === topic.name);
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
        questions: {
          create: questions_.map((q) => {
            const qtype = q.type;
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
            return {
              title: q.title,
              ...(q.subtitle && { subtitle: q.subtitle }),
              type: q.type,
              options: q.options,
              difficulty: difficulty,
            };
          }),
        },
      },
    });
  }

  console.log('topics created: ', topics.length);
  prisma.$disconnect();
};
