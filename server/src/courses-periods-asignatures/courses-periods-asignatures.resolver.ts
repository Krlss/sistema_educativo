import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesController } from './courses-periods-asignatures.controller';
import { FindByPeriodAndCourseDTO } from './dto/findByPeriodAndCourse';
import { PeriodsCoursesAsignatures } from './entities/courses-periods-asignature.entity';

@Resolver(() => PeriodsCoursesAsignatures)
export class PeriodsCoursesAsignaturesResolver {
  constructor(
    private readonly CPAController: PeriodsCoursesAsignaturesController,
  ) {}

  @Query(() => [PeriodsCoursesAsignatures])
  periodsCoursesAsignatures() {
    return this.CPAController.getAll();
  }

  @Query(() => PeriodsCoursesAsignatures, { nullable: true })
  periodsCoursesAsignature(@Args('id', { type: () => Int }) id: number) {
    return this.CPAController.get(id);
  }

  @Query(() => [PeriodsCoursesAsignatures])
  async asignaturesByPeriod_Course(
    @Args({ name: 'input', type: () => FindByPeriodAndCourseDTO })
    data: FindByPeriodAndCourseDTO,
  ) {
    return this.CPAController.getByPeriodId_CourseId(data);
  }
}
