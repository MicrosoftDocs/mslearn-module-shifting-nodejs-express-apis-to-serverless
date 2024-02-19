import { Request, Response } from 'express';
import * as data from './vacation.service';

async function getVacations(req: Request, res: Response): Promise<void> {
  try {
    const vacations = data.getVacations();
    res.status(200).json(vacations);
  } catch (error) {
    res.status(500).send(error.message || 'An error occurred to get vacations');
  }
}

async function postVacation(req: Request, res: Response): Promise<void> {

  const { name, description } = req.body;

  try {
    const newVacation = data.addVacation({ id: undefined, name, description });
    res.status(201).json(newVacation);
  } catch (error) {
    res.status(500).send(error.message || 'An error occurred to add a new vacation');
  }
}

async function putVacation(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const updatedVacation = data.updateVacation({ id, name, description });

    if (updatedVacation !== undefined) {
      res.status(200).json(updatedVacation);
    } else {
      console.error(`Vacation with ID ${id} not found`);
      res.status(404).json({ error: `Vacation with ID ${id} not found` });
    }
  } catch (error) {
    console.error(`Error updating vacation: ${error.message}`);
    res.status(500).send(`Error updating vacation: ${error.message}`);
  }
}

async function deleteVacation(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const deletedVacation = data.deleteVacation(id);
    
    if (deletedVacation) {
      res.status(204).json({});   
    } else {
      res.status(404).json({ message: `Vacation with id ${id} not found` });
    }
  } catch (error) {
    res.status(500).send(error.message || 'An error occurred to delete a vacation');
  }
}

export default { getVacations, postVacation, putVacation, deleteVacation };
