import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesUnitsController } from './courses-periods-asignatures-units.controller';
import { PeriodsCoursesAsignaturesUnit } from './entities/courses-periods-asignatures-unit.entity';
import { CreatePeriodsCoursesAsignaturesUnitDTO } from './dto/create-courses-periods-asignatures-unit.input';
import { UpdatePeriodsCoursesAsignaturesUnitDTO } from './dto/update-courses-periods-asignatures-unit.input';

@Resolver(() => PeriodsCoursesAsignaturesUnit)
export class PeriodsCoursesAsignaturesUnitsResolver {
  constructor(
    private readonly CPAUController: PeriodsCoursesAsignaturesUnitsController,
  ) {}

  @Query(() => [PeriodsCoursesAsignaturesUnit], {
    name: 'periodsCoursesAsignaturesUnits',
  })
  periodsCoursesAsignaturesUnits() {
    return this.CPAUController.getMany();
  }

  @Query(() => PeriodsCoursesAsignaturesUnit, {
    name: 'periodsCoursesAsignaturesUnit',
  })
  periodsCoursesAsignaturesUnit(@Args('id', { type: () => Int }) id: number) {
    return this.CPAUController.get(id);
  }

  @Query(() => [PeriodsCoursesAsignaturesUnit])
  periodsCoursesAsignaturesUnitsByCoursePeriodAsignature(
    @Args('data', { type: () => Int })
    data: number,
  ) {
    return this.CPAUController.getManyByCoursePeriodAsignature(data);
  }

  @Query(() => PeriodsCoursesAsignaturesUnit)
  periodsCoursesAsignaturesUnitsByCoursePeriodAsignature_Unit(
    @Args('periodCourseAsignatureUnitId', { type: () => Int })
    periodCourseAsignatureId: number,
    @Args('unitId', { type: () => String })
    unitId: string,
  ) {
    return this.CPAUController.getByCoursePeriodAsignature_Unit(
      unitId,
      periodCourseAsignatureId,
    );
  }

  @Mutation(() => PeriodsCoursesAsignaturesUnit)
  testUnitActive(
    @Args('input')
    data: UpdatePeriodsCoursesAsignaturesUnitDTO,
  ) {
    return this.CPAUController.update(data);
  }
}
