import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CourseModule } from './course/course.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { PeriodModule } from './period/period.module';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    CoreModule,
    CourseModule,
    PrismaModule,
    PeriodModule,
    UserModule,
    RolModule,
  ],
})
export class AppModule {}
