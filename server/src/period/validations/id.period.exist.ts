import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PeriodService } from '../period.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsPeriodExist', async: true })
@Injectable()
export class IsExist implements ValidatorConstraintInterface {
  constructor(protected readonly periodService: PeriodService) {}

  async validate(text: string) {
    return !!(await this.periodService.get(text));
  }
}
