import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { In } from "typeorm";
import { Topic } from "../../../domain/topics/topic.entity";

@ValidatorConstraint({ async: true })
export class TopicNotExistConstraint implements ValidatorConstraintInterface {
  validate(ids: number[]) {
    return Topic.find({ where: { id: In(ids) } }).then((topic) => {
      if (topic.length) return true;
      return false;
    });
  }
}

export function TopicNotExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: TopicNotExistConstraint,
    });
  };
}
