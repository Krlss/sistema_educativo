import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { In } from "typeorm";
import { Asignature } from "../../../domain/asignatures/asignature.entity";

@ValidatorConstraint({ async: true })
export class AsignatureNotExistConstraint
  implements ValidatorConstraintInterface
{
  validate(ids: number[]) {
    return Asignature.find({ where: { id: In(ids) } }).then((asignature) => {
      if (asignature.length) return true;
      return false;
    });
  }
}

export function AsignatureNotExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: AsignatureNotExistConstraint,
    });
  };
}
