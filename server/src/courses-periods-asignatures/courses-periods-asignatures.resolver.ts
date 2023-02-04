import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CoursesPeriodsAsignaturesController } from './courses-periods-asignatures.controller';
import { FindByPeriodAndCourseDTO } from './dto/findByPeriodAndCourse';
import { CoursesPeriodsAsignature } from './entities/courses-periods-asignature.entity';

@Resolver(() => CoursesPeriodsAsignature)
export class CoursesPeriodsAsignaturesResolver {
  constructor(
    private readonly CPAController: CoursesPeriodsAsignaturesController,
  ) {}

  @Query(() => [CoursesPeriodsAsignature])
  coursesPeriodsAsignatures() {
    return this.CPAController.getAll();
  }

  @Query(() => CoursesPeriodsAsignature, { nullable: true })
  coursesPeriodsAsignature(@Args('id', { type: () => Int }) id: number) {
    return this.CPAController.get(id);
  }

  @Query(() => [CoursesPeriodsAsignature])
  async asignaturesByPeriod_Course(
    @Args({ name: 'input', type: () => FindByPeriodAndCourseDTO })
    data: FindByPeriodAndCourseDTO,
  ) {
    return this.CPAController.getByPeriodId_CourseId(data);
  }
}
