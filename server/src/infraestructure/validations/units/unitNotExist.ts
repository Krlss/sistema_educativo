import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { In } from "typeorm";
import { Unit } from "../../../domain/units/unit.entity";

@ValidatorConstraint({ async: true })
export class UnitNotExistConstraint implements ValidatorConstraintInterface {
  validate(ids: number[]) {
    return Unit.find({ where: { id: In(ids) } }).then((unit) => {
      if (unit.length) return true;
      return false;
    });
  }
}

export function UnitNotExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UnitNotExistConstraint,
    });
  };
}
