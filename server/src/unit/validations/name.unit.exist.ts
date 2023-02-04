import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UnitService } from '../unit.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsUniqueName', async: true })
@Injectable()
export class IsUniqueName implements ValidatorConstraintInterface {
  constructor(protected readonly unitService: UnitService) {}

  async validate(text: string) {
    return !(await this.unitService.getByName(text));
  }
}
