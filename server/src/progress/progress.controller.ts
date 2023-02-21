import { Controller } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ProgressService } from './progress.service';
import { UpdateProgressDTO } from './dto/update-progress';

@Controller('progress')
export class ProgressController {
  constructor(
    private readonly userService: UserService,
    private readonly progressService: ProgressService,
  ) {}

  async updateProgress(data: UpdateProgressDTO) {
    const period = await this.userService.getUserLastPeriod(data.userId);
    if (data.unitId) {
      return this.progressService.updateUnit({
        userId: data.userId,
        periodId: period.id,
        asignatureId: data.asignatureId,
        unitId: data.unitId,
        questions: data.questions,
        nota: data.nota,
      });
    } else {
      return this.progressService.updateAsignature({
        userId: data.userId,
        periodId: period.id,
        asignatureId: data.asignatureId,
        questions: data.questions,
        nota: data.nota,
      });
    }
  }
}
