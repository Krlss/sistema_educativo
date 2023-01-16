import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { In } from "typeorm";
import { Course } from "../../../domain/courses/course.entity";

@ValidatorConstraint({ async: true })
export class CourseNotExistConstraint implements ValidatorConstraintInterface {
  validate(ids: number[]) {
    return Course.find({ where: { id: In(ids) } }).then((course) => {
      if (course.length) return true;
      return false;
    });
  }
}

export function CourseNotExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: CourseNotExistConstraint,
    });
  };
}
