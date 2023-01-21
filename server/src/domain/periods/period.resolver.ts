import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { periodController } from "./period.controller";
import { Period } from "./period.entity";

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
    @Arg("name") name: string,
    @Arg("periods") periods: number[]
  ): Promise<boolean | unknown> {
    return await this.periodController.createPeriod(name, periods);
  }

  @Mutation(() => Boolean)
  async updatePeriod(
    @Arg("id") id: number,
    @Arg("data") args: string
  ): Promise<boolean | unknown> {
    return await this.periodController.updatePeriod(id, args);
  }

  @Mutation(() => Boolean)
  async deletePeriod(@Arg("id") id: number): Promise<boolean | unknown> {
    return await this.periodController.deletePeriod(id);
  }
}

export default PeriodResolver;
