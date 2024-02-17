interface Vacation {
  id: string;
  name: string;
  description: string;
}

const data = {

  vacations: [
    {
      id: '10',
      name: 'Florida beach getaway',
      description: 'Soft beach sands, warm sunsets, calm waters'
    },
    {
      id: '20',
      name: 'Glacier excursions',
      description: 'Vistas of the centuries old glaciers'
    },
    {
      id: '30',
      name: 'Iceland',
      description:
        'Explore the dramatic landscape with volcanoes, geysers, hot springs and lava fields'
    },
    {
      id: '40',
      name: 'Norway',
      description: 'Visit breathtaking fjords and waterfalls'
    },
    {
      id: '50',
      name: 'Rocky mountain vacation',
      description: 'Long and relaxing hikes through the mountains'
    }
  ]
};

const addVacation = (vacation: Vacation): Vacation => {
  try {
    vacation.id = `vacation-${vacation.name}`;
    data.vacations.push(vacation);

    return vacation;
  } catch (error: unknown) {
    const err = error as Error;
    console.log('Error adding vacation', err);
  }
};

const updateVacation = (updatedVacation: Vacation): Vacation | undefined => {

  try {
    const index = data.vacations.findIndex(v => v.id === updatedVacation.id);

    if (index !== -1) {
      data.vacations.splice(index, 1, updatedVacation);
      return updatedVacation;
    }

    return undefined;
  } catch (error) {
    const err = error as Error;
    console.log('Error updating vacation', err);
  }
};

const deleteVacation = (id: string): boolean => {
  try {
    const initialLength = data.vacations.length;
    data.vacations = data.vacations.filter(v => v.id !== id);

    return data.vacations.length !== initialLength;
  } catch (error: unknown) {
    const err = error as Error;
    console.log('Error deleting vacation', err);
  }
};

const getVacations = (): Vacation[] => {
  try {
    return data.vacations;
  } catch (error: unknown) {
    const err = error as Error;
    console.log('Error deleting vacation', err);
  }
};

export { addVacation, updateVacation, deleteVacation, getVacations, Vacation };
