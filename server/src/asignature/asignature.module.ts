import { Module } from '@nestjs/common';
import { AsignatureService } from './asignature.service';
import { AsignatureResolver } from './asignature.resolver';
import { AsignatureController } from './asignature.controller';
import { PeriodsCoursesModule } from 'src/courses-periods/courses-periods.module';
import { IsCoursePeriodsExist } from 'src/courses-periods/validations/ids.course-period.exist';
import { UserService } from 'src/user/user.service';
@Module({
  imports: [PeriodsCoursesModule],
  providers: [
    AsignatureResolver,
    AsignatureService,
    AsignatureController,
    IsCoursePeriodsExist,
    UserService,
  ],
  controllers: [AsignatureController],
  exports: [AsignatureService],
})
export class AsignatureModule {}
