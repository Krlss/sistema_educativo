import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserController } from './user.controller';
import { IsExistsRoles } from '../rol/validations/ids.rol.exist';
import { RolModule } from '../rol/rol.module';
import { IsUniqueEmail } from './validations';

@Module({
  imports: [RolModule],
  providers: [
    UserResolver,
    UserService,
    UserController,
    IsExistsRoles,
    IsUniqueEmail,
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
