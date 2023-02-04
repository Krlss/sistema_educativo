import { CreateUnitDTO } from './create-unit';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsExist } from '../validations';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';

@InputType()
export class UpdateUnitDTO extends PartialType(CreateUnitDTO) {
  @Field(() => String)
  @Validate(IsExist, {
    message: 'No existe una unidad con este id',
  })
  @IsNotEmpty({ message: 'El id no puede estar vacío' })
  @MinLength(2, { message: 'El id debe tener al menos 2 caracteres' })
  id: string;
}
