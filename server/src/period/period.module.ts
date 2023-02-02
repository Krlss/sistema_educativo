import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodResolver } from './period.resolver';
import { PeriodController } from './period.controller';

@Module({
  providers: [PeriodResolver, PeriodService, PeriodController],
  exports: [PeriodService],
  controllers: [PeriodController],
})
export class PeriodModule {}
