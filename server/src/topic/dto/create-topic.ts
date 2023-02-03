import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateTopicDTO {
  @Field({ description: 'Nombre del tema' })
  @IsNotEmpty({ message: 'El nombre del tema no puede estar vacío' })
  @MinLength(2, {
    message: 'El nombre del tema debe tener al menos 2 caracteres',
  })
  name: string;

  @Field({ description: 'Esta imagen representa la clase del tema' })
  @IsNotEmpty({ message: 'La imagen del tema no puede estar vacío' })
  image: string;

  @Field({ description: 'Este es el vídeo más explicativo del tema' })
  @IsNotEmpty({ message: 'El vídeo del tema no puede estar vacío' })
  video: string;
}
