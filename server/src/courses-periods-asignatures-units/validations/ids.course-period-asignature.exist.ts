import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PeriodsCoursesAsignaturesUnitsService } from '../courses-periods-asignatures-units.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsCPAUExist', async: true })
@Injectable()
export class IsCPAUExist implements ValidatorConstraintInterface {
  constructor(
    protected readonly CPAUService: PeriodsCoursesAsignaturesUnitsService,
  ) {}

  async validate(numbers: number[]) {
    return !!(await this.CPAUService.getManyByIds(numbers));
  }
}
