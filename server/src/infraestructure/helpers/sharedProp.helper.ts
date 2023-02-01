import { Field } from "type-graphql";
import { UpdateDateColumn, CreateDateColumn, BaseEntity } from "typeorm";

export abstract class SharedProp extends BaseEntity {
  @Field()
  @CreateDateColumn({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt?: Date;

  @Field()
  @UpdateDateColumn({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt?: Date;
}
