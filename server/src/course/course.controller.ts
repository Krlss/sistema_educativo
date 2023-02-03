import { Controller } from '@nestjs/common';
import { Period } from 'src/period/entities/period.entity';
import { CourseService } from './course.service';
import { CreateCourseDTO } from './dto/create-course';
import { UpdateCourseDTO } from './dto/update.course';
import { Course } from './entities/course.entity';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  async getMany() {
    return await this.courseService.getMany();
  }

  async get(id: string) {
    return await this.courseService.get(id);
  }

  async create(data: CreateCourseDTO) {
    return await this.courseService.create(data);
  }

  async update(data: UpdateCourseDTO) {
    return await this.courseService.update(data);
  }

  async delete(id: string) {
    return await this.courseService.delete(id);
  }
}
