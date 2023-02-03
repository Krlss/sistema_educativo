import { Module } from '@nestjs/common';
import { AsignatureService } from './asignature.service';
import { AsignatureResolver } from './asignature.resolver';
import { AsignatureController } from './asignature.controller';

@Module({
  providers: [AsignatureResolver, AsignatureService, AsignatureController],
  controllers: [AsignatureController]
})
export class AsignatureModule {}
