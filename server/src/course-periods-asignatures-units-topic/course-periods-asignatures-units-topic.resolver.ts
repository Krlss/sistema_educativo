import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CoursePeriodsAsignaturesUnitsTopicController } from './course-periods-asignatures-units-topic.controller';
import { PeriodsCoursesAsignaturesUnitsTopics } from './entities/course-periods-asignatures-units-topic.entity';
import { CreateCoursePeriodsAsignaturesUnitsTopicInput } from './dto/create-course-periods-asignatures-units-topic.input';
import { UpdateCoursePeriodsAsignaturesUnitsTopicInput } from './dto/update-course-periods-asignatures-units-topic.input';

@Resolver(() => PeriodsCoursesAsignaturesUnitsTopics)
export class CoursePeriodsAsignaturesUnitsTopicResolver {
  constructor(
    private readonly CPAUTController: CoursePeriodsAsignaturesUnitsTopicController,
  ) {}

  @Query(() => [PeriodsCoursesAsignaturesUnitsTopics])
  getMany() {
    return this.CPAUTController.getMany();
  }

  @Query(() => PeriodsCoursesAsignaturesUnitsTopics)
  get(@Args('id', { type: () => Int }) id: number) {
    return this.CPAUTController.get(id);
  }
}
