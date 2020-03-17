"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            description: 'Explore the dramatic landscape with volcanoes, geysers, hot springs and lava fields'
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
const addVacation = vacation => {
    vacation.id = `vacation-${vacation.name}`;
    data.vacations.push(vacation);
    return vacation;
};
exports.addVacation = addVacation;
const updateVacation = vacation => {
    const index = data.vacations.findIndex(v => v.id === vacation.id);
    data.vacations.splice(index, 1, vacation);
    return vacation;
};
exports.updateVacation = updateVacation;
const deleteVacation = id => {
    data.vacations = data.vacations.filter(v => v.id !== id);
    return true;
};
exports.deleteVacation = deleteVacation;
const getVacations = () => {
    return data.vacations;
};
exports.getVacations = getVacations;
//# sourceMappingURL=data.js.map