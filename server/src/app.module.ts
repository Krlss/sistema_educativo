import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CourseModule } from './course/course.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { PeriodModule } from './period/period.module';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { ConfigModule } from '@nestjs/config';
import { QuestionModule } from './question/question.module';
import { TopicModule } from './topic/topic.module';
import { AsignatureModule } from './asignature/asignature.module';
import { CoursesPeriodsModule } from './courses-periods/courses-periods.module';
import { CoursesPeriodsAsignaturesModule } from './courses-periods-asignatures/courses-periods-asignatures.module';
import configuration from './config/configuration';

@Module({
  imports: [
    CoreModule,
    CourseModule,
    PrismaModule,
    PeriodModule,
    UserModule,
    RolModule,
    QuestionModule,
    TopicModule,
    AsignatureModule,
    CoursesPeriodsModule,
    CoursesPeriodsAsignaturesModule,
  ],
})
export class AppModule {}
