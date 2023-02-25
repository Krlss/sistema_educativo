import { Controller } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user';
import { UserService } from './user.service';
import { hash } from 'src/common/helpers/bcrypt.helpers';
import { PeriodsCoursesService } from 'src/courses-periods/courses-periods.service';
import { ProgressService } from 'src/progress/progress.service';
import { CreateProgressDTO } from './dto/create-progress';
import { UpdateProgressDTO } from 'src/progress/dto/update-progress';
import { Workbook } from 'excel4node';
import { Grades } from './entities/userGrades';
import { List } from './entities/userLists';
import * as fs from 'fs';
import { resolve } from 'path';

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

  async getGradesByAsignature(periodCourseId: number) {
    const grades = await this.userService.getGradesByAsignature(periodCourseId);

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
            period: grade.periodCourseAsignature.periodCourse.period.name,
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
          if (
            unit.userId === agrade.userId &&
            unit.periodCourseAsignatureUnit.periodCourseAsignature.asignature
              .name === agrade.asignature
          ) {
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
    return await this.generateExcelAsignature(data);
  }

  generateExcelAsignature(data: Grades[]) {
    return new Promise((resolve_, reject) => {
      try {
        const wb = new Workbook();
        const style = wb.createStyle({
          font: {
            color: '#000000',
            size: 12,
          },
          numberFormat: '$#,##0.00; ($#,##0.00); -',
        });
        const students = data.reduce((r, a) => {
          r[a.userId] = r[a.userId] || [];
          r[a.userId].push(a);
          return r;
        }, Object.create(null));
        const ws = wb.addWorksheet('Calificación');
        ws.cell(1, 1).string('Periodo').style(style);
        ws.cell(1, 2).string(data[0].period).style(style);
        ws.cell(2, 1).string('Curso').style(style);
        ws.cell(2, 2).string(data[0].course).style(style);

        const asignatures = students[Object.keys(students)[0]];
        let i = 0;
        asignatures.map((asignature, index: number) => {
          const x = i;
          ws.cell(4, i + Math.floor(asignature.units.length / 2) + 2)
            .string(asignature.asignature)
            .style(style);
          i += asignature.units.length;
          for (let j = 0; j < asignature.units.length; j++) {
            ws.cell(5, x + 2 + j)
              .string(asignature.units[j].name)
              .style(style);
          }
          ws.cell(5, x + 2 + asignature.units.length)
            .string('Promedio')
            .style(style);
          i++;
        });
        Object.keys(students).map((d, index: number) => {
          let j = 0;
          const row = index + 6;

          ws.cell(row, 1).string(students[d][0].username).style(style);
          students[d].map((unit, index: number) => {
            for (let k = 0; k < unit.units.length; k++) {
              ws.cell(row, j + 2 + k)
                .string(unit.units[k].nota.toString())
                .style(style);
            }
            j += unit.units.length;
            ws.cell(row, j + 2)
              .string(unit.nota.toString())
              .style(style);
            j++;
          });
        });
        const filename = `${data[0].course}_${data[0].asignature}`;
        const filePath = resolve(process.cwd(), `${filename}.xlsx`);
        wb.write(filePath, (error, stats) => {
          if (error) {
            reject(error);
          } else {
            const fileContent = fs.readFileSync(filePath).toString('base64');
            resolve_(fileContent);
            fs.unlink(filePath, (e) => {
              if (e) console.log(e);
            });
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async getList(periodCourseId: number) {
    const list = await this.userService.getList(periodCourseId);
    const data = {
      period: list[0].periodCourseAsignature.periodCourse.period.name,
      course: list[0].periodCourseAsignature.periodCourse.course.name,
      users: list
        .map((item) => {
          return {
            username: item.user.name,
            lastname: item.user.lastName,
            id: item.user.id,
            email: item.user.email,
          };
        })
        .sort((a, b) => a.username.localeCompare(b.username)),
    };
    const newArray = [];

    data.users.forEach((obj) => {
      const duplicate = newArray.find((item) => item.id === obj.id);
      if (!duplicate) {
        newArray.push(obj);
      }
    });
    data.users = newArray;
    return await this.generateExcelList(data);
  }

  generateExcelList(data: List) {
    return new Promise((resolve_, reject) => {
      try {
        const wb = new Workbook();
        const style = wb.createStyle({
          font: {
            color: '#000000',
            size: 12,
          },
          numberFormat: '$#,##0.00; ($#,##0.00); -',
        });
        const ws = wb.addWorksheet('Lista');
        ws.cell(1, 1).string('Periodo').style(style);
        ws.cell(1, 2).string(data.period).style(style);
        ws.cell(2, 1).string('Curso').style(style);
        ws.cell(2, 2).string(data.course).style(style);
        ws.cell(4, 1).string('Nombre').style(style);
        ws.cell(4, 2).string('Apellido').style(style);
        ws.cell(4, 3).string('Correo').style(style);
        data.users.map((user, index: number) => {
          const row = index + 5;
          ws.cell(row, 1).string(user.username).style(style);
          ws.cell(row, 2).string(user.lastname).style(style);
          ws.cell(row, 3).string(user.email).style(style);
        });
        const filename = `Lista_${data.course}`;
        const filePath = resolve(process.cwd(), `${filename}.xlsx`);
        wb.write(filePath, (error, stats) => {
          if (error) {
            reject(error);
          } else {
            const fileContent = fs.readFileSync(filePath).toString('base64');
            resolve_(fileContent);
            fs.unlink(filePath, (e) => {
              if (e) console.log(e);
            });
          }
        });
      } catch (error) {
        reject(error);
      }
    });
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
