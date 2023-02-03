import { Controller } from '@nestjs/common';
import { CoursesPeriodsService } from './courses-periods.service';

@Controller('courses-periods')
export class CoursesPeriodsController {
  constructor(private readonly coursesPeriodsService: CoursesPeriodsService) {}

  async getMany() {
    return await this.coursesPeriodsService.getMany();
  }

  async get(id: number) {
    return await this.coursesPeriodsService.get(id);
  }

  async getByCourseId(id: string) {
    return await this.coursesPeriodsService.getByCourseId(id);
  }

  async getByPeriodId(id: string) {
    return await this.coursesPeriodsService.getByPeriodId(id);
  }
}
