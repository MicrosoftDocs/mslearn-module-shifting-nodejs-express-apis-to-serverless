import * as express from 'express';
import { vacationService } from '../services';

const router = express.Router();

router.get('/vacations', (req, res) => {
  vacationService.getVacations(req, res);
});

router.post('/vacations', (req, res) => {
  vacationService.postVacation(req, res);
});

router.put('/vacations/:id', (req, res) => {
  vacationService.putVacation(req, res);
});

router.delete('/vacations/:id', (req, res) => {
  vacationService.deleteVacation(req, res);
});

export const vacationRoutes = router;
