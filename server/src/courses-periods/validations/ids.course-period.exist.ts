import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PeriodsCoursesService } from '../courses-periods.service';

@ValidatorConstraint({ name: 'IsCoursePeriodsExist', async: true })
@Injectable()
export class IsCoursePeriodsExist implements ValidatorConstraintInterface {
  constructor(protected readonly CPService: PeriodsCoursesService) {}

  async validate(numbers: number[]) {
    if (!numbers) return true;
    return (
      (await this.CPService.getManyByIds(numbers)).length === numbers.length
    );
  }
}
