import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Topic } from "../../../domain/topics/topic.entity";

@ValidatorConstraint({ async: true })
export class isNameAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  validate(name: string) {
    return Topic.findOne({ where: { name } }).then((topic) => {
      if (topic) return false;
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
