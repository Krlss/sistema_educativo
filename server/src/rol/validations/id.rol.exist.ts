import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { RolService } from '../rol.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsPeriodExist', async: true })
@Injectable()
export class IsExist implements ValidatorConstraintInterface {
  constructor(protected readonly rolService: RolService) {}

  async validate(text: string) {
    return !!(await this.rolService.get(text));
  }
}
