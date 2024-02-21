import express from 'express';
import { vacationRoutes } from './vacation.routes';

const router = express.Router();

router.use('/', vacationRoutes);

export { router };
