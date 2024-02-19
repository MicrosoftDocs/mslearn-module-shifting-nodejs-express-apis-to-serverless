
import vacationsData from '../../data/vacations.json';
import { Vacation } from '../../models/vacation.models';

// Function to read vacation data from the vacations.json file
const readVacationsFromFile = (): Vacation[] => {
  return vacationsData;
};

const addVacation = (vacation: Vacation): Vacation | undefined=> {
  try {
    const vacations = readVacationsFromFile();
    vacation.id = `vacation-${vacation.name}`;
    vacations.push(vacation);

    return vacation;
  } catch (error: unknown) {
    const err = error as Error;
    console.log('Error adding vacation', err);

    return undefined;
  }
};

const updateVacation = (updatedVacation: Vacation): Vacation | undefined => {

  try {
    const vacations = readVacationsFromFile();
    const index = vacations.findIndex(v => v.id === updatedVacation.id);

    if (index !== -1) {
      vacations.splice(index, 1, updatedVacation);
      return updatedVacation;
    }

    return undefined;
  } catch (error) {
    const err = error as Error;
    console.log('Error updating vacation', err);

    return undefined;
  }
};

const deleteVacation = (id: string): boolean => {
  try {
    let vacations = readVacationsFromFile();
    const initialLength = vacations.length;
    vacations = vacations.filter(v => v.id !== id);

    return vacations.length !== initialLength;
  } catch (error: unknown) {
    const err = error as Error;
    console.log('Error deleting vacation', err);
  }
};

const getVacations = (): Vacation[] => {
  try {
    return readVacationsFromFile();
  } catch (error) {
    console.error('Error getting vacations:', error);
    return [];
  }
};

export { 
  readVacationsFromFile,
  addVacation, 
  updateVacation, 
  deleteVacation, 
  getVacations,  
};