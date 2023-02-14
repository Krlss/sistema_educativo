import { ObjectType, Field, ID } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesUnitsTopics } from 'src/course-periods-asignatures-units-topic/entities/course-periods-asignatures-units-topic.entity';
import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Topic {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  video: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;

  @Field(() => [Question], { nullable: true })
  questions: Question[];

  @Field(() => [User], { nullable: true })
  users: User[];

  @Field(() => [PeriodsCoursesAsignaturesUnitsTopics], { nullable: true })
  periodsCoursesAsignaturesUnitsTopics: PeriodsCoursesAsignaturesUnitsTopics[];
}
