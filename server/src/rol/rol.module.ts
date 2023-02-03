import { Module, forwardRef } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolResolver } from './rol.resolver';
import { RolController } from './rol.controller';
import { IsNameUnique, IsExist } from './validations';
import { UserModule } from '../user/user.module';
import { IsExistsUsers } from 'src/user/validations/ids.user.exist';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [
    RolResolver,
    RolService,
    RolController,
    IsNameUnique,
    IsExist,
    IsExistsUsers,
  ],
  controllers: [RolController],
  exports: [RolService],
})
export class RolModule {}
