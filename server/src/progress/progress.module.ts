import { Module, forwardRef } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { IsExistUser } from 'src/user/validations';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
/* import { ProgressResolver } from './progress.resolver';
import { ProgressController } from './progress.controller'; */

@Module({
  imports: [],
  providers: [
    /* ProgressResolver, */ ProgressService,
    IsExistUser,
    UserService,
  ],
  controllers: [
    /* ProgressController */
  ],
  exports: [ProgressService],
})
export class ProgressModule {}
