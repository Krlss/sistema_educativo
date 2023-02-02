import { Controller } from '@nestjs/common';
import { CreateRolDTO } from './dto/create-rol';
import { UpdateRolDTO } from './dto/update-rol';
import { RolService } from './rol.service';

@Controller('rol')
export class RolController {
  constructor(private readonly roleService: RolService) {}

  async getMany() {
    return await this.roleService.getMany();
  }

  async get(id: string) {
    return await this.roleService.get(id);
  }

  async create(data: CreateRolDTO) {
    return await this.roleService.create(data);
  }

  async update(data: UpdateRolDTO) {
    return await this.roleService.update(data);
  }

  async delete(id: string) {
    return await this.roleService.delete(id);
  }
}
