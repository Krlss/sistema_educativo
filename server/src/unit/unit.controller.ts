import { Controller } from '@nestjs/common';
import { UnitService } from './unit.service';
import { CreateUnitDTO } from './dto/create-unit';
import { UpdateUnitDTO } from './dto/update-unit';

@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  async getMany() {
    return await this.unitService.getMany();
  }

  async get(id: string) {
    return await this.unitService.get(id);
  }

  async create(data: CreateUnitDTO) {
    return await this.unitService.create(data);
  }

  async update(data: UpdateUnitDTO) {
    return await this.unitService.update(data);
  }

  async delete(id: string) {
    return await this.unitService.delete(id);
  }
}
