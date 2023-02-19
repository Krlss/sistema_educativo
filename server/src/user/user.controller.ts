import { Controller } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user';
import { UserService } from './user.service';
import { hash } from 'src/common/helpers/bcrypt.helpers';
import { PeriodsCoursesService } from 'src/courses-periods/courses-periods.service';
import { ProgressService } from 'src/progress/progress.service';
import { Progress } from 'src/progress/entities/progress.entity';
import { CreateProgressDTO } from './dto/create-progress';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly coursePeriodService: PeriodsCoursesService,
    private readonly progressService: ProgressService,
  ) {}

  async getMany() {
    return await this.userService.getMany();
  }

  async get(id: string) {
    return await this.userService.get(id);
  }

  async getStudents() {
    return await this.userService.getStudents();
  }

  async getProgressByUserId(id: string) {
    const progress = await this.userService.getProgressByUserId(id);

    return await this.userService.getProgressByUserId(id);
  }

  async create(data: CreateUserDTO) {
    return await this.userService.create({
      ...data,
      password: await hash(data.password),
    });
  }

  async update(data: UpdateUserDTO) {
    return await this.userService.update({
      ...data,
      ...(data.password && { password: await hash(data.password) }),
    });
  }

  async enroll(input: CreateProgressDTO) {
    const user = await this.userService.get(input.userId);
    const periodCourse = await this.coursePeriodService.get(
      input.periodCourseId,
    );
    if (!periodCourse.periodsCoursesAsignatures.length)
      throw new Error('Este curso periodo no tiene asignaturas asignadas!');

    periodCourse.periodsCoursesAsignatures.forEach(async (asignature) => {
      await this.progressService.create({
        periodsCoursesAsignaturesId: asignature.id,
        userId: user.id,
        periodCourseAsignatureUnitId: null,
      });
      asignature.periodCourseAsignatureUnits.forEach(async (unit) => {
        await this.progressService.create({
          periodCourseAsignatureUnitId: unit.id,
          userId: user.id,
          periodsCoursesAsignaturesId: null,
        });
      });
    });
    return true;
  }

  async delete(id: string) {
    return await this.userService.delete(id);
  }

  async getAsignaturesByUserId(id: string) {
    const lastPeriod = await this.userService.getUserLastPeriod(id);

    const asignatures = await this.userService.getAsignaturesByUserId(
      id,
      lastPeriod.id,
    );

    const transformData = asignatures.map((A) => {
      A.periodsCoursesAsignatures = A.periodsCoursesAsignatures.filter(
        (B) => B.periodCourse.periodId === lastPeriod.id,
      );
      return A;
    });

    return transformData;
  }

  async getAsignatureByUserId(id: string, asignatureId: string) {
    return await this.userService.getAsignatureByUserId(id, asignatureId);
  }

  async updateUserTopic(userId: string, topicId: string) {
    return await this.userService.updateUserTopic(userId, topicId);
  }
}
