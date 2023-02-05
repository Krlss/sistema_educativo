import { Injectable } from '@nestjs/common';
import { CreateProgressInput } from './dto/create-progress.input';
import { UpdateProgressInput } from './dto/update-progress.input';

@Injectable()
export class ProgressService {
  create(createProgressInput: CreateProgressInput) {
    return 'This action adds a new progress';
  }

  findAll() {
    return `This action returns all progress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} progress`;
  }

  update(id: number, updateProgressInput: UpdateProgressInput) {
    return `This action updates a #${id} progress`;
  }

  remove(id: number) {
    return `This action removes a #${id} progress`;
  }
}
