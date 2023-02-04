import { Controller } from '@nestjs/common';
import { CoursePeriodsAsignaturesUnitsTopicService } from './course-periods-asignatures-units-topic.service';

@Controller('course-periods-asignatures-units-topic')
export class CoursePeriodsAsignaturesUnitsTopicController {
  constructor(
    private readonly CPAUTService: CoursePeriodsAsignaturesUnitsTopicService,
  ) {}

  getMany() {
    return this.CPAUTService.getMany();
  }

  get(id: number) {
    return this.CPAUTService.get(id);
  }
}
