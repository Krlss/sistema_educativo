import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesUnits } from 'src/courses-periods-asignatures-units/entities/courses-periods-asignatures-unit.entity';
import { PeriodsCoursesAsignatures } from 'src/courses-periods-asignatures/entities/courses-periods-asignature.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Progress {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => ID, { nullable: true })
  userId: string;

  @Field(() => Int, { nullable: true })
  periodCourseAsignatureId: number;

  @Field(() => Int, { nullable: true })
  periodCourseAsignatureUnitId: number;

  @Field(() => Float, { nullable: true })
  nota: number;

  @Field(() => String, { nullable: true })
  questions?: string;

  @Field(() => Boolean, { nullable: true })
  finished?: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => PeriodsCoursesAsignatures, { nullable: true })
  periodCourseAsignature?: PeriodsCoursesAsignatures;

  @Field(() => PeriodsCoursesAsignaturesUnits, { nullable: true })
  periodCourseAsignatureUnit?: PeriodsCoursesAsignaturesUnits;
}
