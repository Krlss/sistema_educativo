import { CreateTopicDTO } from './create-topic';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class UpdateTopicDTO extends PartialType(CreateTopicDTO) {
  @IsNotEmpty({ message: 'El id del tema no puede estar vacío' })
  @MinLength(2, { message: 'El id del tema debe tener al menos 2 caracteres' })
  @Field({ description: 'Id del tema' })
  id: string;
}
