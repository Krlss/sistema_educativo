import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Unit } from "../../../domain/units/unit.entity";

@ValidatorConstraint({ async: true })
export class isNameAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  validate(name: string) {
    return Unit.findOne({ where: { name } }).then((unit) => {
      if (unit) return false;
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
