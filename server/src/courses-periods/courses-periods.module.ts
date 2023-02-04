import { Module } from '@nestjs/common';
import { PeriodsCoursesService } from './courses-periods.service';
import { PeriodsCoursesResolver } from './courses-periods.resolver';
import { PeriodsCoursesController } from './courses-periods.controller';

@Module({
  providers: [
    PeriodsCoursesResolver,
    PeriodsCoursesService,
    PeriodsCoursesController,
  ],
  controllers: [PeriodsCoursesController],
  exports: [PeriodsCoursesService],
})
export class PeriodsCoursesModule {}
