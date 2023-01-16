import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { courseController } from "./course.controller";
import { Course } from "./course.entity";

@Resolver()
class CourseResolver {
  private courseController: courseController;
  constructor() {
    this.courseController = new courseController();
  }
  @Query(() => [Course])
  async getCourseById(@Arg("id") id: number) {
    return await this.courseController.getCourseById(id);
  }

  @Query(() => [Course])
  async getAllCourses() {
    return await this.courseController.getAllCourses();
  }

  @Mutation(() => Boolean)
  async createCourse(@Arg("name") name: string) {
    return await this.courseController.createCourse(name);
  }

  @Mutation(() => Boolean)
  async updateCourse(@Arg("id") id: number, @Arg("name") name: string) {
    return await this.courseController.updateCourse(id, name);
  }

  @Mutation(() => Boolean)
  async deleteCourse(@Arg("id") id: number) {
    return await this.courseController.deleteCourse(id);
  }
}

export default CourseResolver;
