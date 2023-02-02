import { Controller } from '@nestjs/common';
import { CreatePeriodDTO } from './dto/create-period';
import { UpdatePeriodDTO } from './dto/update-period';
import { PeriodService } from './period.service';

@Controller('period')
export class PeriodController {
  constructor(private readonly periodService: PeriodService) {}

  async getMany() {
    const periods = await this.periodService.getMany();
    const result = periods.map((course) => {
      return {
        ...course,
        courses: course.courses.map((course) => course.course),
      };
    });
    return result;
  }

  async get(id: string) {
    const period = await this.periodService.get(id);
    return period
      ? {
          ...period,
          courses: period.courses.map((course) => course.course),
        }
      : null;
  }

  async create(data: CreatePeriodDTO) {
    return await this.periodService.create(data);
  }

  async update(data: UpdatePeriodDTO) {
    return await this.periodService.update(data);
  }

  async delete(id: string) {
    return await this.periodService.delete(id);
  }
}
