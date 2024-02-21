import * as express from 'express';
import vacationService  from '../services/vacation.service';

const router = express.Router();

router.get('/vacations', (req, res) => {
  try {
    const vacations = vacationService.getVacations();
    res.status(200).json(vacations);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/vacations', (req, res) => {
  const vacation = {
    id: undefined,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const newVacation = vacationService.addVacation(vacation);
    res.status(201).json(newVacation);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/vacations/:id', (req, res) => {
  const vacation = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const updatedVacation = vacationService.updateVacation(vacation);
    res.status(200).json(updatedVacation);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/vacations/:id', (req, res) => {
  const { id } = req.params;

  try {
    vacationService.deleteVacation(id);
    res.status(200).json({});
  } catch (error) {
    res.status(500).send(error);
  }
});

export const vacationRoutes = router;
