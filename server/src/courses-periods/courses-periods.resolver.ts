import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CoursesPeriodsController } from './courses-periods.controller';
import { CoursesPeriods } from './entities/courses-period.entity';

@Resolver(() => CoursesPeriods)
export class CoursesPeriodsResolver {
  constructor(private readonly CPController: CoursesPeriodsController) {}

  @Query(() => [CoursesPeriods], { nullable: true })
  coursesPeriods() {
    return this.CPController.getMany();
  }

  @Query(() => CoursesPeriods, { nullable: true })
  coursePeriod(@Args('id') id: number) {
    return this.CPController.get(id);
  }

  @Query(() => [CoursesPeriods], { nullable: true })
  coursePeriodByCourseId(@Args('id') id: string) {
    return this.CPController.getByCourseId(id);
  }

  @Query(() => [CoursesPeriods], { nullable: true })
  coursePeriodByPeriodId(@Args('id') id: string) {
    return this.CPController.getByPeriodId(id);
  }
}
