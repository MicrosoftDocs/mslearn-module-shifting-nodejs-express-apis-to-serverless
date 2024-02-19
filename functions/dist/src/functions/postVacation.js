"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postVacation = void 0;
const vacationService = __importStar(require("../services/vacation.services"));
async function postVacation(request, context) {
    context.log(`HTTP function processed request for URL: "${request.url}"`);
    try {
        const vacation = await request.json();
        // Validate the vacation object
        if (!vacation || typeof vacation !== 'object' || !vacation.name || !vacation.description) {
            return {
                status: 400,
                jsonBody: {
                    error: 'Invalid or missing vacation data.'
                }
            };
        }
        // Add the vacation using the service
        const newVacation = vacationService.addVacation(vacation);
        // Successfully added the vacation
        return {
            status: 201,
            jsonBody: newVacation
        };
    }
    catch (error) {
        const err = error;
        context.error(`Error create vacation: ${err.message}`);
        return {
            status: 500,
            jsonBody: {
                error: 'Failed to create vacation'
            }
        };
    }
}
exports.postVacation = postVacation;
