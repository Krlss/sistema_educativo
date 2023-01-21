import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { In } from "typeorm";
import { Period } from "../../../domain/periods/period.entity";

@ValidatorConstraint({ async: true })
export class PeriodNotExistConstraint implements ValidatorConstraintInterface {
  validate(ids: number[]) {
    return Period.find({ where: { id: In(ids) } }).then((period) => {
      if (period.length) return true;
      return false;
    });
  }
}

export function PeriodNotExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: PeriodNotExistConstraint,
    });
  };
}
