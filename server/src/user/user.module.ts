import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserController } from './user.controller';
import { IsExistsRoles } from '../rol/validations/ids.rol.exist';
import { RolModule } from '../rol/rol.module';
import { IsExistUser, IsUniqueEmail } from './validations';
import { ProgressService } from 'src/progress/progress.service';
import { ProgressModule } from 'src/progress/progress.module';
import { PeriodsCoursesService } from 'src/courses-periods/courses-periods.service';

@Module({
  imports: [RolModule, ProgressModule],
  providers: [
    UserResolver,
    UserService,
    UserController,
    IsExistsRoles,
    IsUniqueEmail,
    ProgressService,
    PeriodsCoursesService,
    IsExistUser,
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
