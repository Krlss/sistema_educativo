import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@ValidatorConstraint({ name: 'IsExistsUsers', async: true })
@Injectable()
export class IsExistsUsers implements ValidatorConstraintInterface {
  constructor(protected readonly userService: UserService) {}

  async validate(text: string[]) {
    return (await this.userService.getManyByIds(text)).length === text.length;
  }
}
