import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { periodController } from "./period.controller";
import { Period } from "./period.entity";
import { periodCreateInput } from "../../infraestructure/validations/periods/period.create.inputs";
import periodUpdateInput from "../../infraestructure/validations/periods/period.update.inputs";

@Resolver()
class PeriodResolver {
  private periodController: periodController;
  constructor() {
    this.periodController = new periodController();
  }

  @Query(() => Period, { nullable: true })
  async getPeriodById(@Arg("id") id: number) {
    return await this.periodController.getPeriodById(id);
  }

  @Query(() => [Period])
  async getPeriods() {
    return await this.periodController.getAllPeriods();
  }

  @Mutation(() => Boolean)
  async createPeriod(
    @Arg("data") data: periodCreateInput
  ): Promise<boolean | unknown> {
    return await this.periodController.createPeriod(data);
  }

  @Mutation(() => Boolean)
  async updatePeriod(
    @Arg("id") id: number,
    @Arg("data") data: periodUpdateInput
  ): Promise<boolean | unknown> {
    return await this.periodController.updatePeriod(id, data);
  }

  @Mutation(() => Boolean)
  async deletePeriod(@Arg("id") id: number): Promise<boolean | unknown> {
    return await this.periodController.deletePeriod(id);
  }
}

export default PeriodResolver;
