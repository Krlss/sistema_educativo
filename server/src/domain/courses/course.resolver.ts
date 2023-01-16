import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {
  courseCreateInput,
  courseUpdateInput,
} from "../../infraestructure/validations/courses";
import { courseController } from "./course.controller";
import { Course } from "./course.entity";

@Resolver()
class CourseResolver {
  private courseController: courseController;
  constructor() {
    this.courseController = new courseController();
  }
  @Query(() => Course, { nullable: true })
  async getCourseById(@Arg("id") id: number) {
    return await this.courseController.getCourseById(id);
  }

  @Query(() => [Course])
  async getCourses() {
    return await this.courseController.getAllCourses();
  }

  @Mutation(() => Boolean)
  async createCourse(
    @Arg("data") args: courseCreateInput
  ): Promise<boolean | unknown> {
    return await this.courseController.createCourse(args);
  }

  @Mutation(() => Boolean)
  async updateCourse(
    @Arg("id") id: number,
    @Arg("data") args: courseUpdateInput
  ): Promise<boolean | unknown> {
    return await this.courseController.updateCourse(id, args);
  }

  @Mutation(() => Boolean)
  async deleteCourse(@Arg("id") id: number): Promise<boolean | unknown> {
    return await this.courseController.deleteCourse(id);
  }
}

export default CourseResolver;
