import { Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitResolver } from './unit.resolver';
import { UnitController } from './unit.controller';
import customValidations from './validations';
import { PeriodsCoursesAsignatures } from 'src/courses-periods-asignatures/entities/courses-periods-asignature.entity';

@Module({
  providers: [
    UnitResolver,
    UnitService,
    UnitController,
    ...customValidations,
    PeriodsCoursesAsignatures,
  ],
  controllers: [UnitController],
})
export class UnitModule {}
