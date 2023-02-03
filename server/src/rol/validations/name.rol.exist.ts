import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { RolService } from '../rol.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsUniqueNamePeriod', async: true })
@Injectable()
export class IsNameUnique implements ValidatorConstraintInterface {
  constructor(protected readonly rolService: RolService) {}

  async validate(text: string) {
    return !(await this.rolService.getByName(text));
  }
}
