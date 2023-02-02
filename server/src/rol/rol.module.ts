import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolResolver } from './rol.resolver';
import { RolController } from './rol.controller';

@Module({
  providers: [RolResolver, RolService, RolController],
  controllers: [RolController],
})
export class RolModule {}
