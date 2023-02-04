import { Controller } from '@nestjs/common';
import { PeriodsCoursesService } from './courses-periods.service';

@Controller('courses-periods')
export class PeriodsCoursesController {
  constructor(private readonly periodsCoursesService: PeriodsCoursesService) {}

  async getMany() {
    return await this.periodsCoursesService.getMany();
  }

  async get(id: number) {
    return await this.periodsCoursesService.get(id);
  }

  async getByCourseId(id: string) {
    return await this.periodsCoursesService.getByCourseId(id);
  }

  async getByPeriodId(id: string) {
    return await this.periodsCoursesService.getByPeriodId(id);
  }
}
