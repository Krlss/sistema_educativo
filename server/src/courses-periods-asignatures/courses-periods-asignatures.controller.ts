import { Controller } from '@nestjs/common';
import { CoursesPeriodsAsignaturesService } from './courses-periods-asignatures.service';
import { FindByPeriodAndCourseDTO } from './dto/findByPeriodAndCourse';

@Controller('courses-periods-asignatures')
export class CoursesPeriodsAsignaturesController {
  constructor(private readonly CPAService: CoursesPeriodsAsignaturesService) {}

  async getAll() {
    return this.CPAService.getAll();
  }

  async get(id: number) {
    return this.CPAService.get(id);
  }

  async getByPeriodId_CourseId(data: FindByPeriodAndCourseDTO) {
    return this.CPAService.getByPeriodId_CourseId(data);
  }
}
