import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PeriodService } from '../period.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsUniqueNamePeriod', async: true })
@Injectable()
export class IsNameUnique implements ValidatorConstraintInterface {
  constructor(protected readonly periodService: PeriodService) {}

  async validate(text: string) {
    return !(await this.periodService.getByName(text));
  }
}
