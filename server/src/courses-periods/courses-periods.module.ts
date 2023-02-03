import { Module } from '@nestjs/common';
import { CoursesPeriodsService } from './courses-periods.service';
import { CoursesPeriodsResolver } from './courses-periods.resolver';
import { CoursesPeriodsController } from './courses-periods.controller';

@Module({
  providers: [
    CoursesPeriodsResolver,
    CoursesPeriodsService,
    CoursesPeriodsController,
  ],
  controllers: [CoursesPeriodsController],
})
export class CoursesPeriodsModule {}
