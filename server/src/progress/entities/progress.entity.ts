import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesUnits } from 'src/courses-periods-asignatures-units/entities/courses-periods-asignatures-unit.entity';
import { PeriodsCoursesAsignatures } from 'src/courses-periods-asignatures/entities/courses-periods-asignature.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Progress {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => User)
  user: User;

  @Field(() => String, { nullable: true })
  questions?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => PeriodsCoursesAsignatures, { nullable: true })
  periodCourseAsignature?: PeriodsCoursesAsignatures;

  @Field(() => PeriodsCoursesAsignaturesUnits, { nullable: true })
  periodCourseAsignatureUnit?: PeriodsCoursesAsignaturesUnits;
}
