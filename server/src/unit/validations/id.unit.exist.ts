import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UnitService } from '../unit.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsUnitExist', async: true })
@Injectable()
export class IsExist implements ValidatorConstraintInterface {
  constructor(protected readonly unitService: UnitService) {}

  async validate(text: string) {
    return !!(await this.unitService.get(text));
  }
}
