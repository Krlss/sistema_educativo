import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicResolver } from './topic.resolver';
import { TopicController } from './topic.controller';
import { PeriodsCoursesAsignaturesUnitsModule } from 'src/courses-periods-asignatures-units/courses-periods-asignatures-units.module';
import { IsCPAUExist } from 'src/courses-periods-asignatures-units/validations/ids.course-period-asignature.exist';

@Module({
  imports: [PeriodsCoursesAsignaturesUnitsModule],
  providers: [TopicResolver, TopicService, TopicController, IsCPAUExist],
  controllers: [TopicController],
})
export class TopicModule {}
