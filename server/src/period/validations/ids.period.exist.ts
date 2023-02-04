import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PeriodService } from '../period.service';

@ValidatorConstraint({ name: 'IsPeriodsExist', async: true })
@Injectable()
export class IsPeriodsExist implements ValidatorConstraintInterface {
  constructor(protected readonly periodService: PeriodService) {}

  async validate(text: string[]) {
    return (await this.periodService.getManyByIds(text)).length === text.length;
  }
}
