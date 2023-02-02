import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Period } from 'src/period/entities/period.entity';

@ObjectType()
export class Course {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field(() => [Period], { nullable: true })
  periods: Period[];
}

@ObjectType()
export class CoursePeriod {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field(() => Period, { nullable: true })
  period: Period;

  @Field(() => Course, { nullable: true })
  course: Course;
}
