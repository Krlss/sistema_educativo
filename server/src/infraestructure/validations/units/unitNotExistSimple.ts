import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Unit } from "../../../domain/units/unit.entity";

@ValidatorConstraint({ async: true })
export class UnitNotExistConstraint implements ValidatorConstraintInterface {
  validate(id: number) {
    return Unit.find({ where: { id } }).then((unit) => {
      if (unit) return true;
      return false;
    });
  }
}

export function UnitNotExistSimple(validationOptions?: ValidationOptions) {
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
