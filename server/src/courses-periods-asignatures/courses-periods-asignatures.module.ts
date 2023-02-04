import { Module } from '@nestjs/common';
import { CoursesPeriodsAsignaturesService } from './courses-periods-asignatures.service';
import { CoursesPeriodsAsignaturesResolver } from './courses-periods-asignatures.resolver';
import { CoursesPeriodsAsignaturesController } from './courses-periods-asignatures.controller';
import { CoursesPeriodsService } from '../courses-periods/courses-periods.service';
import { IsExist as IsCourseIdExist } from 'src/course/validations';
import { IsExist as IsPeriodIdExist } from 'src/period/validations';
import { CourseModule } from 'src/course/course.module';
import { PeriodModule } from 'src/period/period.module';

@Module({
  imports: [CourseModule, PeriodModule],
  providers: [
    CoursesPeriodsAsignaturesController,
    CoursesPeriodsAsignaturesResolver,
    CoursesPeriodsAsignaturesService,
    CoursesPeriodsService,
    IsCourseIdExist,
    IsPeriodIdExist,
  ],
  controllers: [CoursesPeriodsAsignaturesController],
})
export class CoursesPeriodsAsignaturesModule {}
