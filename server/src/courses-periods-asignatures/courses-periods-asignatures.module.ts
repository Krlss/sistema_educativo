import { Module } from '@nestjs/common';
import { PeriodsCoursesAsignaturesService } from './courses-periods-asignatures.service';
import { PeriodsCoursesAsignaturesResolver } from './courses-periods-asignatures.resolver';
import { PeriodsCoursesAsignaturesController } from './courses-periods-asignatures.controller';
import { PeriodsCoursesService } from '../courses-periods/courses-periods.service';
import { IsExist as IsCourseIdExist } from 'src/course/validations';
import { IsExist as IsPeriodIdExist } from 'src/period/validations';
import { CourseModule } from 'src/course/course.module';
import { PeriodModule } from 'src/period/period.module';

@Module({
  imports: [CourseModule, PeriodModule],
  providers: [
    PeriodsCoursesAsignaturesController,
    PeriodsCoursesAsignaturesResolver,
    PeriodsCoursesAsignaturesService,
    PeriodsCoursesService,
    IsCourseIdExist,
    IsPeriodIdExist,
  ],
  controllers: [PeriodsCoursesAsignaturesController],
})
export class PeriodsCoursesAsignaturesModule {}
