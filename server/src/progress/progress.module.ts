import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressResolver } from './progress.resolver';
import { ProgressController } from './progress.controller';

@Module({
  providers: [ProgressResolver, ProgressService],
  controllers: [ProgressController]
})
export class ProgressModule {}
