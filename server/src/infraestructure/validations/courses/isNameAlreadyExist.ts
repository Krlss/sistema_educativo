import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Course } from "../../../domain/courses/course.entity";

@ValidatorConstraint({ async: true })
export class isNameAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  validate(name: string) {
    return Course.findOne({ where: { name } }).then((course) => {
      if (course) return false;
      return true;
    });
  }
}

export function IsNameAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: isNameAlreadyExistConstraint,
    });
  };
}
