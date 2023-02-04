import { Module, forwardRef } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodResolver } from './period.resolver';
import { PeriodController } from './period.controller';
import PeriodValidations from './validations';
import { CourseModule } from '../course/course.module';
import { IsCoursesExist } from 'src/course/validations/ids.course.exist';

@Module({
  imports: [forwardRef(() => CourseModule)],
  providers: [
    PeriodResolver,
    PeriodService,
    PeriodController,
    IsCoursesExist,
    ...PeriodValidations,
  ],
  controllers: [PeriodController],
  exports: [PeriodService],
})
export class PeriodModule {}
