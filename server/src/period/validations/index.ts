import { IsExist } from './id.period.exist';
import { IsNameUnique } from './name.period.exist';

export { IsExist, IsNameUnique };
const customValidationsPeriod = [IsExist, IsNameUnique];
export default customValidationsPeriod;
