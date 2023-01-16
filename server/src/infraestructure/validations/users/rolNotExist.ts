import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { In } from "typeorm";
import { Rol } from "../../../domain/roles/rol.entity";

@ValidatorConstraint({ async: true })
export class RolNotExistConstraint implements ValidatorConstraintInterface {
  validate(id: number[]) {
    return Rol.find({ where: { id: In(id) } }).then((rol) => {
      if (rol.length) return true;
      return false;
    });
  }
}

export function RolNotExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: RolNotExistConstraint,
    });
  };
}
