import { CreatePeriodDTO } from './create-period';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsExist } from '../validations/id.period.exist';

@InputType()
export class UpdatePeriodDTO extends PartialType(CreatePeriodDTO) {
  @IsNotEmpty({ message: 'El id del periodo no puede estar vacío' })
  @Field({ description: 'Id del periodo' })
  @MinLength(2, { message: 'El id debe tener al menos 2 caracteres' })
  @Validate(IsExist, {
    message: 'El periodo no existe',
  })
  id: string;
}
