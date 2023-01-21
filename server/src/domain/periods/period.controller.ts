import { Period } from "./period.entity";
import { periodService } from "./period.service";

export class periodController {
  private periodService: periodService;
  constructor() {
    this.periodService = new periodService();
  }
  async getPeriodById(id: number) {
    return await this.periodService.getPeriodById(id);
  }
  async getAllPeriods() {
    return await this.periodService.getAllPeriods();
  }

  async createPeriod(name: string, periods: number[]) {
    const _periods = await this.getPeriodsByArrayId(periods);
    if (_periods.length !== periods.length) throw new Error("Period not found");
    /* _periods.forEach((period) => {
      if (period.parentId) throw new Error("Period already has a parent");
    }); */
    const period = new Period();
    period.name = name;
    return await this.periodService.createPeriod(period);
  }

  async updatePeriod(id: number, name: string) {
    const period = await this.getPeriodById(id);
    if (!period) throw new Error("Period not found");
    period.name = name;
    return await this.periodService.updatePeriod(period);
  }

  async deletePeriod(id: number) {
    return await this.periodService.deletePeriod(id);
  }

  async getPeriodsByArrayId(ids: number[]) {
    return await this.periodService.getPeriodsByArrayId(ids);
  }
}
