import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolResolver } from './rol.resolver';
import { RolController } from './rol.controller';
import { IsNameUnique, IsExist } from './validations';

@Module({
  providers: [RolResolver, RolService, RolController, IsNameUnique, IsExist],
  controllers: [RolController],
})
export class RolModule {}
