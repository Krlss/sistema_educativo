import { Module, forwardRef } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
import { PeriodModule } from 'src/period/period.module';
import { CourseController } from './course.controller';
import CourseValidaitons from './validations';
import { IsPeriodsExist } from 'src/period/validations/ids.period.exist';

@Module({
  imports: [forwardRef(() => PeriodModule)],
  providers: [
    CourseService,
    CourseResolver,
    CourseController,
    IsPeriodsExist,
    ...CourseValidaitons,
  ],
  controllers: [CourseController],
  exports: [CourseService],
})
export class CourseModule {}
