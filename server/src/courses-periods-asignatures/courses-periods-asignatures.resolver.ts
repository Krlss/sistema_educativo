import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesController } from './courses-periods-asignatures.controller';
import { FindByPeriodAndCourseDTO } from './dto/findByPeriodAndCourse';
import { PeriodsCoursesAsignature } from './entities/courses-periods-asignature.entity';

@Resolver(() => PeriodsCoursesAsignature)
export class PeriodsCoursesAsignaturesResolver {
  constructor(
    private readonly CPAController: PeriodsCoursesAsignaturesController,
  ) {}

  @Query(() => [PeriodsCoursesAsignature])
  periodsCoursesAsignatures() {
    return this.CPAController.getAll();
  }

  @Query(() => PeriodsCoursesAsignature, { nullable: true })
  periodsCoursesAsignature(@Args('id', { type: () => Int }) id: number) {
    return this.CPAController.get(id);
  }

  @Query(() => [PeriodsCoursesAsignature])
  async asignaturesByPeriod_Course(
    @Args({ name: 'input', type: () => FindByPeriodAndCourseDTO })
    data: FindByPeriodAndCourseDTO,
  ) {
    return this.CPAController.getByPeriodId_CourseId(data);
  }
}
