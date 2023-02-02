import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CourseController } from './course.controller';
import { CreateCourseDTO } from './dto/create-course';
import { UpdateCourseDTO } from './dto/update.course';
import { Course } from './entities/course.entity';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private readonly courseController: CourseController) {}

  @Query(() => [Course])
  async courses() {
    return this.courseController.getMany();
  }

  @Query(() => Course, { nullable: true })
  async course(@Args('id') id: string) {
    return await this.courseController.get(id);
  }

  @Mutation(() => Course, { nullable: true })
  async createCourse(
    @Args({ name: 'input', type: () => CreateCourseDTO }) data: CreateCourseDTO,
  ) {
    return await this.courseController.create(data);
  }

  @Mutation(() => Course, { nullable: true })
  async updateCourse(
    @Args({ name: 'input', type: () => UpdateCourseDTO }) data: UpdateCourseDTO,
  ) {
    return await this.courseController.update(data);
  }

  @Mutation(() => Course, { nullable: true })
  async deleteCourse(@Args('id') id: string) {
    return await this.courseController.delete(id);
  }
}
