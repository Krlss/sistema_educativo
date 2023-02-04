import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PeriodsCoursesController } from './courses-periods.controller';
import { PeriodsCourses } from './entities/courses-period.entity';

@Resolver(() => PeriodsCourses)
export class PeriodsCoursesResolver {
  constructor(private readonly CPController: PeriodsCoursesController) {}

  @Query(() => [PeriodsCourses], { nullable: true })
  periodsCourses() {
    return this.CPController.getMany();
  }

  @Query(() => PeriodsCourses, { nullable: true })
  periodCourse(@Args('id') id: number) {
    return this.CPController.get(id);
  }

  @Query(() => [PeriodsCourses], { nullable: true })
  periodCourseByCourseId(@Args('id') id: string) {
    return this.CPController.getByCourseId(id);
  }

  @Query(() => [PeriodsCourses], { nullable: true })
  periodCourseByPeriodId(@Args('id') id: string) {
    return this.CPController.getByPeriodId(id);
  }
}
