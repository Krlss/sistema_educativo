import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CourseService } from '../course.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsPeriodExist', async: true })
@Injectable()
export class IsExist implements ValidatorConstraintInterface {
  constructor(protected readonly courseService: CourseService) {}

  async validate(text: string) {
    return !!(await this.courseService.get(text));
  }
}
