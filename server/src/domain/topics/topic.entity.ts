import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Unit } from "../units/unit.entity";
import { Asignature } from "../asignatures/asignature.entity";

@Entity()
@ObjectType()
export class Topic extends BaseEntity {
  @Field({ description: "Identificador del tema" })
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ description: "Nombre del tema" })
  @Column()
  name!: string;

  @Field({ description: "Clase del tema" })
  @Column()
  image!: string;

  @Field({ description: "Video del tema" })
  @Column()
  video!: string;

  @Field(() => Unit, { description: "Unidad al que pertenece el tema" })
  @ManyToOne(() => Unit, (unit) => unit.topics)
  unit?: Unit;

  @Field(() => Asignature, {
    description: "Asignatura al que pertenece el tema",
  })
  @ManyToOne(() => Asignature, (asignature) => asignature.topics)
  asignature?: Asignature;

  @Field({ description: "Fecha de creación del tema" })
  @Column({ default: () => "NOW()" })
  createdAt!: Date;

  @Field({ description: "Fecha de actualización del tema" })
  @Column({ default: () => "NOW()" })
  updatedAt!: Date;
}
