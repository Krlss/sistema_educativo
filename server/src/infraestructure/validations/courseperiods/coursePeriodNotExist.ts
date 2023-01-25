import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { In } from "typeorm";
import { CoursePeriod } from "../../../domain/coursePeriod/coursePeriod.entity";

@ValidatorConstraint({ async: true })
export class CoursePeriodNotExistConstraint
  implements ValidatorConstraintInterface
{
  validate(ids: number[]) {
    return CoursePeriod.find({ where: { id: In(ids) } }).then(
      (courseperiod) => {
        if (courseperiod.length) return true;
        return false;
      }
    );
  }
}

export function CoursePeriodNotExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: CoursePeriodNotExistConstraint,
    });
  };
}
