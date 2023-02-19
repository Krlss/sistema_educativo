import { Controller } from '@nestjs/common';
import { AsignatureService } from './asignature.service';
import { UpdateAsignatureDTO } from './dto/update-asignature';
import { CreateAsignatureDTO } from './dto/create-asignature';
import { UserService } from 'src/user/user.service';

@Controller('asignature')
export class AsignatureController {
  constructor(
    private readonly asignatureService: AsignatureService,
    private readonly userService: UserService,
  ) {}

  async getMany() {
    return this.asignatureService.getMany();
  }

  async get(id: string) {
    return this.asignatureService.get(id);
  }

  async create(data: CreateAsignatureDTO) {
    return this.asignatureService.create(data);
  }

  async update(data: UpdateAsignatureDTO) {
    return this.asignatureService.update(data);
  }

  async delete(id: string) {
    return this.asignatureService.delete(id);
  }

  async getTopicsByAsignatureAndUser(
    asignatureId: string,
    userId: string,
    unitId: string,
  ) {
    const period = await this.userService.getUserLastPeriod(userId);
    const data = await this.asignatureService.getTopicsByAsignatureAndUser(
      asignatureId,
      userId,
      unitId,
    );

    const periodCourseFind = data.periodsCoursesAsignatures.find(
      (p) => p.periodCourse.periodId === period.id,
    );

    return {
      ...data,
      unit: {
        ...periodCourseFind.periodCourseAsignatureUnits.find(
          (pcau) => pcau.periodCourseAsignatureId,
        ).unit,
        topics: periodCourseFind.periodCourseAsignatureUnits
          .find((pcau) => pcau.periodCourseAsignatureId)
          .periodCourseAsignatureUnitsTopic.map((t) => t.topic),
      },
    };
  }
}
