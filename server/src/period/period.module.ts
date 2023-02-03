import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodResolver } from './period.resolver';
import { PeriodController } from './period.controller';
import { IsExist } from './validations/id.period.exist';
import { IsNameUnique } from './validations/name.period.exist';

@Module({
  providers: [
    PeriodResolver,
    PeriodService,
    PeriodController,
    IsExist,
    IsNameUnique,
  ],
  exports: [PeriodService],
  controllers: [PeriodController],
})
export class PeriodModule {}
