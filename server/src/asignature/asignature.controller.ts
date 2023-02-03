import { Controller } from '@nestjs/common';
import { AsignatureService } from './asignature.service';
import { UpdateAsignatureDTO } from './dto/update-asignature';
import { CreateAsignatureDTO } from './dto/create-asignature';

@Controller('asignature')
export class AsignatureController {
  constructor(private readonly asignatureService: AsignatureService) {}

  async getMany() {
    return this.asignatureService.getMany();
  }

  async get(id: string) {
    return this.asignatureService.get(id);
  }

  async create(data: CreateAsignatureDTO) {
    return this.asignatureService.create(data);
  }

  async update(data: UpdateAsignatureDTO) {
    return this.asignatureService.update(data);
  }

  async delete(id: string) {
    return this.asignatureService.delete(id);
  }
}
