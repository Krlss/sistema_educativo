import { Controller } from '@nestjs/common';
import { CreatePeriodDTO } from './dto/create-period';
import { UpdatePeriodDTO } from './dto/update-period';
import { PeriodService } from './period.service';

@Controller('period')
export class PeriodController {
  constructor(private readonly periodService: PeriodService) {}

  async getMany() {
    return await this.periodService.getMany();
  }

  async get(id: string) {
    return await this.periodService.get(id);
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
