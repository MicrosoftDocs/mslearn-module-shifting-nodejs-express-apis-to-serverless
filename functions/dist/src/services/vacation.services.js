"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVacations = exports.deleteVacation = exports.updateVacation = exports.addVacation = exports.readVacationsFromFile = void 0;
const vacations_json_1 = __importDefault(require("../../data/vacations.json"));
// Function to read vacation data from the vacations.json file
const readVacationsFromFile = () => {
    return vacations_json_1.default;
};
exports.readVacationsFromFile = readVacationsFromFile;
const addVacation = (vacation) => {
    try {
        const vacations = readVacationsFromFile();
        vacation.id = `vacation-${Date.now()}`;
        vacations.push(vacation);
        return vacation;
    }
    catch (error) {
        const err = error;
        console.log('Error adding vacation', err);
        return undefined;
    }
};
exports.addVacation = addVacation;
const updateVacation = (updatedVacation) => {
    try {
        const vacations = readVacationsFromFile();
        const index = vacations.findIndex(v => v.id === updatedVacation.id);
        if (index !== -1) {
            vacations.splice(index, 1, updatedVacation);
            return updatedVacation;
        }
        return undefined;
    }
    catch (error) {
        const err = error;
        console.log('Error updating vacation', err);
        return undefined;
    }
};
exports.updateVacation = updateVacation;
const deleteVacation = (id) => {
    try {
        let vacations = readVacationsFromFile();
        const initialLength = vacations.length;
        vacations = vacations.filter(v => v.id !== id);
        return vacations.length !== initialLength;
    }
    catch (error) {
        const err = error;
        console.log('Error deleting vacation', err);
    }
};
exports.deleteVacation = deleteVacation;
const getVacations = () => {
    try {
        return readVacationsFromFile();
    }
    catch (error) {
        console.error('Error getting vacations:', error);
        return [];
    }
};
exports.getVacations = getVacations;
