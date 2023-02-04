import { Module } from '@nestjs/common';
import { PeriodsCoursesAsignaturesUnitsService } from './courses-periods-asignatures-units.service';
import { PeriodsCoursesAsignaturesUnitsResolver } from './courses-periods-asignatures-units.resolver';
import { PeriodsCoursesAsignaturesUnitsController } from './courses-periods-asignatures-units.controller';

@Module({
  providers: [
    PeriodsCoursesAsignaturesUnitsResolver,
    PeriodsCoursesAsignaturesUnitsService,
    PeriodsCoursesAsignaturesUnitsController,
  ],
  controllers: [PeriodsCoursesAsignaturesUnitsController],
  exports: [PeriodsCoursesAsignaturesUnitsService],
})
export class PeriodsCoursesAsignaturesUnitsModule {}
