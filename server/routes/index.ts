import express from 'express';

const router = express.Router();

import { vacationRoutes } from './vacation.routes';

router.use('/', vacationRoutes);

export { router };
