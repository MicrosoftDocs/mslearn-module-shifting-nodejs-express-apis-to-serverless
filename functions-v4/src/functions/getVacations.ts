import { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import * as vacationService from '../services/vacation.services';

export async function getVacations(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    try {
        const vacations = vacationService.getVacations();

        if (vacations) {
            return {
                status: 200,
                jsonBody: vacations
            };
        } else {
            return {
                status: 404,
                jsonBody: {
                    error: 'No vacations found'
                }
            };
        }      
    } catch (error: unknown) {
        const err = error as Error;
        context.error(`Error listing vacations: ${err.message}`);

        return {
            status: 500,
            jsonBody: {
                error: 'Failed to list vacations'
            }
        };
    }
};