import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Rol } from "../../../domain/roles/rol.entity";

@ValidatorConstraint({ async: true })
export class isNameAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  validate(name: string) {
    return Rol.findOne({ where: { name } }).then((rol) => {
      if (rol) return false;
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
