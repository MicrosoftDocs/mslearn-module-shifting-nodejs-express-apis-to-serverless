import * as data from '../data/vacations.json';

let vacations = data;

const addVacation = (vacation) => {
  vacation.id = `vacation-${vacation.name}`;
  vacations.push(vacation);
  return vacation;
};

const updateVacation = (vacation) => {
  const index = vacations.findIndex((v) => v.id === vacation.id);
  vacations.splice(index, 1, vacation);
  return vacation;
};

const deleteVacation = (id) => {
  vacations = vacations.filter((v) => v.id !== id);
  return true;
};

const getVacations = () => {
  return vacations;
};

export default { getVacations, addVacation, updateVacation, deleteVacation };
