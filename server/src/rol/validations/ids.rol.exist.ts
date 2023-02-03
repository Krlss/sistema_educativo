import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { RolService } from '../rol.service';

@ValidatorConstraint({ name: 'IsExistsRoles', async: true })
@Injectable()
export class IsExistsRoles implements ValidatorConstraintInterface {
  constructor(protected readonly rolService: RolService) {}

  async validate(text: string[]) {
    return (await this.rolService.getManyByIds(text)).length === text.length;
  }
}
