import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Course } from 'src/course/entities/course.entity';

@ObjectType()
export class Period {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field(() => [Course], { nullable: true })
  courses: Course[];
}
