import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Asignature } from "../../../domain/asignatures/asignature.entity";

@ValidatorConstraint({ async: true })
export class isNameAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  validate(name: string) {
    return Asignature.findOne({ where: { name } }).then((asignature) => {
      if (asignature) return false;
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
