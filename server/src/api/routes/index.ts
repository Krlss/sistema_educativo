import { Router} from 'express';

const router = Router();

import UserRouter from './User'

router.use('/user', UserRouter)

export = router;


