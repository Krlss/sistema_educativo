import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../user.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsUniqueEmail', async: true })
@Injectable()
export class IsUniqueEmail implements ValidatorConstraintInterface {
  constructor(protected readonly userService: UserService) {}

  async validate(text: string) {
    return !(await this.userService.getByEmail(text));
  }
}
