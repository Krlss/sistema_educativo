import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Unit } from "./unit.entity";

import { UnitController } from "./unit.controller";
import {
  unitCreateInput,
  unitUpdateInput,
} from "../../infraestructure/validations/units";
import { Topic } from "../topics/topic.entity";

@Resolver()
class UnitResolver {
  private UnitController: UnitController;

  constructor() {
    this.UnitController = new UnitController();
  }

  @Query(() => [Unit])
  async getUnits() {
    return await this.UnitController.getUnits();
  }

  @Query(() => Unit, { nullable: true })
  async getUnit(@Arg("id") id: number) {
    return await this.UnitController.getUnitById(id);
  }

  @Mutation(() => Boolean)
  async createUnit(
    @Arg("data") args: unitCreateInput
  ): Promise<boolean | unknown> {
    return await this.UnitController.createUnit({
      ...args,
    });
  }

  @Mutation(() => Boolean)
  async updateUnit(
    @Arg("id") id: number,
    @Arg("data") args: unitUpdateInput
  ): Promise<boolean | unknown> {
    return await this.UnitController.updateUnit(id, {
      ...args,
    });
  }

  @Mutation(() => Boolean)
  async deleteAsignature(@Arg("id") id: number): Promise<boolean | unknown> {
    return await this.UnitController.deleteUnit(id);
  }
}

export default UnitResolver;
