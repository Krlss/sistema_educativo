import { Controller } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user';
import { UserService } from './user.service';
import { hash } from 'src/common/helpers/bcrypt.helpers';
import { Response } from 'express';
import { PeriodsCoursesService } from 'src/courses-periods/courses-periods.service';
import { ProgressService } from 'src/progress/progress.service';
import { Progress } from 'src/progress/entities/progress.entity';
import { CreateProgressDTO } from './dto/create-progress';
import { UpdateProgressDTO } from 'src/progress/dto/update-progress';
import { Workbook } from 'excel4node';
import { Grades } from './entities/userGrades';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { Blob } from 'buffer';

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
    return await this.userService.getProgressByUserId(id);
  }

  async getGradesByAsignature(
    asignatureId: string,
    periodCourseId: number,
    res: Response,
  ) {
    const grades = await this.userService.getGradesByAsignature(
      asignatureId,
      periodCourseId,
    );

    const ugrades = grades.filter(
      (grade) => grade.periodCourseAsignatureUnitId,
    );

    const agrades = grades
      .map((grade) => {
        if (grade.periodCourseAsignatureId) {
          const nu = ugrades
            .map((unit) => {
              if (unit.userId === grade.userId) {
                return unit;
              }
            })
            .filter((unit) => unit);
          const nota =
            nu.reduce((acc, item) => {
              if (grade.userId === item.userId) {
                acc += item.nota ?? 0;
              } else {
                acc += 0;
              }
              return acc;
            }, 0) / nu.length;
          return {
            id: grade.id,
            asignature: grade.periodCourseAsignature.asignature.name,
            course: grade.periodCourseAsignature.periodCourse.course.name,
            nota: grade.nota ? (grade.nota + nota) / 2 : nota,
            userId: grade.user.id,
            username: grade.user.name,
            units: [],
          };
        }
      })
      .filter((grade) => grade);

    const data = agrades.map((agrade) => {
      const units = ugrades
        .map((unit) => {
          if (unit.userId === agrade.userId) {
            return {
              id: unit.id,
              name: unit.periodCourseAsignatureUnit.unit.name,
              nota: unit.nota ?? 'N/A',
              userId: unit.user.id,
            };
          }
        })
        .filter((unit) => unit)
        .sort((a, b) => a.name.localeCompare(b.name));
      agrade.units = units;
      return agrade;
    });
    this.generateExcelAsignature(data, res).then((filename) => {
      return readFileSync(resolve('./', filename + '.xlsx'));
    });
  }

  async generateExcelAsignature(data: Grades[], res: Response) {
    try {
      const wb = new Workbook();
      const style = wb.createStyle({
        font: {
          color: '#000000',
          size: 12,
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -',
      });
      data.forEach((d) => {
        const ws = wb.addWorksheet(d.username);
        ws.cell(1, 1).string('Asignature').style(style);
        ws.cell(1, 2).string(d.asignature);
        ws.cell(2, 1).string('Estudiante').style(style);
        ws.cell(2, 2).string(d.username);
        ws.cell(3, 1).string('Nota').style(style);
        ws.cell(3, 2).string(d.nota.toString());
        d.units.forEach((grade, index) => {
          ws.cell(index + 5, 1)
            .string(grade.name)
            .style(style);
          ws.cell(index + 5, 2)
            .string(grade.nota.toString())
            .style(style);
        });
      });
      const filename = `${data[0].course}_${data[0].asignature}`;
      wb.write(filename + '.xlsx').then(() => {
        return filename;
      });
    } catch (e) {
      console.log('lala', e);
    }
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
    const period = await this.userService.getUserLastPeriod(id);
    const data = await this.userService.getAsignatureByUserId(
      id,
      asignatureId,
      period.id,
    );

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      image: data.image,
      units: data.periodsCoursesAsignatures
        .find((p) => p.periodCourse.periodId === period.id)
        .periodCourseAsignatureUnits.map((u) => {
          return {
            ...u.unit,
            testActive: u.testActive,
            topics: u.periodCourseAsignatureUnitsTopic.map((t) => t.topic),
          };
        }),
    };
  }

  async updateProgress(data: UpdateProgressDTO) {
    const period = await this.userService.getUserLastPeriod(data.userId);
    if (data.unitId) {
      return await this.progressService.updateUnit({
        userId: data.userId,
        periodId: period.id,
        asignatureId: data.asignatureId,
        unitId: data.unitId,
        questions: data.questions,
        nota: data.nota,
      });
    } else {
      return await this.progressService.updateAsignature({
        userId: data.userId,
        periodId: period.id,
        asignatureId: data.asignatureId,
        questions: data.questions,
        nota: data.nota,
      });
    }
  }

  async updateUserTopic(userId: string, topicId: string) {
    return await this.userService.updateUserTopic(userId, topicId);
  }
}
