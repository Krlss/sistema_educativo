import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
import { PeriodModule } from 'src/period/period.module';
import { CourseController } from './course.controller';

@Module({
  providers: [CourseService, CourseResolver, CourseController],
  imports: [PeriodModule],
  controllers: [CourseController],
})
export class CourseModule {}
