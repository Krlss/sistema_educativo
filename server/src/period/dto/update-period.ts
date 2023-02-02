import { CreatePeriodDTO } from './create-period';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class UpdatePeriodDTO extends PartialType(CreatePeriodDTO) {
  @IsNotEmpty({ message: 'El id del periodo no puede estar vacío' })
  @Field({ description: 'Id del periodo' })
  @MinLength(2, { message: 'El id debe tener al menos 2 caracteres' })
  id: string;
}
