import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CourseService } from '../course.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsUniqueNamePeriod', async: true })
@Injectable()
export class IsNameUnique implements ValidatorConstraintInterface {
  constructor(protected readonly courseService: CourseService) {}

  async validate(text: string) {
    return !(await this.courseService.getByName(text));
  }
}
