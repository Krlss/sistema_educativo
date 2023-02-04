import { Module } from '@nestjs/common';
import { CoursePeriodsAsignaturesUnitsTopicService } from './course-periods-asignatures-units-topic.service';
import { CoursePeriodsAsignaturesUnitsTopicResolver } from './course-periods-asignatures-units-topic.resolver';
import { CoursePeriodsAsignaturesUnitsTopicController } from './course-periods-asignatures-units-topic.controller';

@Module({
  providers: [
    CoursePeriodsAsignaturesUnitsTopicResolver,
    CoursePeriodsAsignaturesUnitsTopicService,
    CoursePeriodsAsignaturesUnitsTopicController,
  ],
  controllers: [CoursePeriodsAsignaturesUnitsTopicController],
  exports: [CoursePeriodsAsignaturesUnitsTopicService],
})
export class CoursePeriodsAsignaturesUnitsTopicModule {}
