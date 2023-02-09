import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { CourseService } from '../course.service';

@ValidatorConstraint({ name: 'IsCoursesExist', async: true })
@Injectable()
export class IsCoursesExist implements ValidatorConstraintInterface {
  constructor(protected readonly courseService: CourseService) {}

  async validate(text: string[]) {
    if (!text) return true;
    return (await this.courseService.getManyByIds(text)).length === text.length;
  }
}
