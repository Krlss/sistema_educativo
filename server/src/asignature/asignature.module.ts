import { Module } from '@nestjs/common';
import { AsignatureService } from './asignature.service';
import { AsignatureResolver } from './asignature.resolver';
import { AsignatureController } from './asignature.controller';
import { PeriodsCoursesModule } from 'src/courses-periods/courses-periods.module';
import { IsCoursePeriodsExist } from 'src/courses-periods/validations/ids.course-period.exist';

@Module({
  imports: [PeriodsCoursesModule],
  providers: [
    AsignatureResolver,
    AsignatureService,
    AsignatureController,
    IsCoursePeriodsExist,
  ],
  controllers: [AsignatureController],
})
export class AsignatureModule {}
