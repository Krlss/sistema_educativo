import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Asignature } from "./asignature.entity";
import {
  asignatureCreateInput,
  asignatureUpdateInput,
} from "../../infraestructure/validations/asignatures";

import { AsignatureController } from "./asignature.controller";
import { CoursePeriod } from "../coursePeriod/coursePeriod.entity";
import { CoursePeriodAsignature } from "../coursePeriodAsignature/coursePeriodAsignature.entity";

@Resolver()
class AsignatureResolver {
  private asignatureController: AsignatureController;

  constructor() {
    this.asignatureController = new AsignatureController();
  }

  @Query(() => [Asignature])
  async getAsignatures() {
    return await this.asignatureController.getAsignatures();
  }

  @Query(() => Asignature, { nullable: true })
  async getAsignature(@Arg("id") id: number) {
    return await this.asignatureController.getAsignatureById(id);
  }

  @Query(() => [CoursePeriodAsignature], { nullable: true })
  async getAsignaturesByCourseAndPeriod(
    @Arg("courseId") courseId: number,
    @Arg("periodId") periodId: number
  ) {
    return await this.asignatureController.getAsignaturesByCourseAndPeriod(
      courseId,
      periodId
    );
  }

  @Query(() => [CoursePeriodAsignature], { nullable: true })
  async getAsignaturesByPeriod(@Arg("periodId") periodId: number) {
    return await this.asignatureController.getAsignaturesByPeriod(periodId);
  }

  @Mutation(() => Boolean)
  async createAsignature(
    @Arg("data") args: asignatureCreateInput
  ): Promise<boolean | unknown> {
    return await this.asignatureController.createAsignature({
      ...args,
    });
  }

  @Mutation(() => Boolean)
  async updateAsignature(
    @Arg("id") id: number,
    @Arg("data") args: asignatureUpdateInput
  ): Promise<boolean | unknown> {
    return await this.asignatureController.updateAsignature(id, {
      ...args,
    });
  }

  @Mutation(() => Boolean)
  async deleteAsignature(@Arg("id") id: number): Promise<boolean | unknown> {
    return await this.asignatureController.deleteAsignature(id);
  }
}

export default AsignatureResolver;
