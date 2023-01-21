import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { coursePeriodController } from "./course_period.controller";
import { CoursePeriod } from "./course_period.entity";

@Resolver()
class CoursePeriodResolver {
  private coursePeriodController: coursePeriodController;
  constructor() {
    this.coursePeriodController = new coursePeriodController();
  }

  @Query(() => [CoursePeriod])
  async getCoursePeriodById(@Arg("id") id: number) {
    return await this.coursePeriodController.getCoursePeriodById(id);
  }

  @Query(() => [CoursePeriod])
  async getAllCoursePeriods() {
    return await this.coursePeriodController.getAllCoursePeriods();
  }

  @Mutation(() => Boolean)
  async createCoursePeriod(
    @Arg("courseId") courseId: number,
    @Arg("periodId") periodId: number
  ) {
    return await this.coursePeriodController.createCoursePeriod(
      courseId,
      periodId
    );
  }

  @Mutation(() => Boolean)
  async updateCoursePeriod(
    @Arg("id") id: number,
    @Arg("courseId", { nullable: true }) courseId: number,
    @Arg("periodId", { nullable: true }) periodId: number
  ) {
    return await this.coursePeriodController.updateCoursePeriod(
      id,
      courseId,
      periodId
    );
  }

  @Mutation(() => Boolean)
  async deleteCoursePeriod(@Arg("id") id: number) {
    return await this.coursePeriodController.deleteCoursePeriod(id);
  }
}

export default CoursePeriodResolver;
