import { IsExist } from './id.course.exist';
import { IsNameUnique } from './name.course.exist';

export { IsExist, IsNameUnique };

const customValidationsCourse = [IsExist, IsNameUnique];
export default customValidationsCourse;
