import { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import * as vacationService from '../services/vacation.services';
import { Vacation } from '../models/vacation.models';

export async function postVacation(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`HTTP function processed request for URL: "${request.url}"`);

    try {
        const vacation = await request.json() as Vacation;

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
    } catch (error: unknown) {
        const err = error as Error;
        context.error(`Error create vacation: ${err.message}`);

        return {
            status: 500,
            jsonBody: {
                error: 'Failed to create vacation'
            }
        };
    }
}
