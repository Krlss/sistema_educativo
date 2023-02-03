import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTopicDTO {
  @Field({ description: 'Nombre del tema' })
  name: string;

  @Field({ description: 'Esta imagen representa la clase del tema' })
  image: string;

  @Field({ description: 'Este es el vídeo más explicativo del tema' })
  video: string;
}
