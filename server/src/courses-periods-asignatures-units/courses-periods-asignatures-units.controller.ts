import { Controller } from '@nestjs/common';
import { PeriodsCoursesAsignaturesUnitsService } from './courses-periods-asignatures-units.service';

@Controller('courses-periods-asignatures-units')
export class PeriodsCoursesAsignaturesUnitsController {
  constructor(
    private readonly CPAUService: PeriodsCoursesAsignaturesUnitsService,
  ) {}

  async getMany() {
    return await this.CPAUService.getMany();
  }

  async get(id: number) {
    return await this.CPAUService.get(id);
  }

  async getManyByCoursePeriodAsignature(id: number) {
    return await this.CPAUService.getManyByCoursePeriodAsignature(id);
  }

  async getByCoursePeriodAsignature_Unit(
    unitId: string,
    periodCourseAsignatureId: number,
  ) {
    return await this.CPAUService.getByCoursePeriodAsignature_Unit(
      unitId,
      periodCourseAsignatureId,
    );
  }
}
