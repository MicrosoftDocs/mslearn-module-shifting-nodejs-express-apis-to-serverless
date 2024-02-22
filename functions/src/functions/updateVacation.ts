import { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import * as vacationService from '../services/vacation.services';
import { Vacation } from '../models/vacation.models';


export async function updateVacation(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  try {
    const id = request.params.id;
    const { name, description } = await request.json() as Vacation;
    
    const updatedVacation = vacationService.updateVacation({ id, name, description });
    
    if (updatedVacation !== undefined) {
      return {
        status: 200,
        jsonBody: {
          updatedVacation
        }
      };
    } else {
      return {
        status: 404,
        jsonBody: {
          error: `Vacation with ID ${id} not found`
        }
      };
    }
  } catch (error: unknown) {
    const err = error as Error;
    context.error(`Error updating vacation: ${err.message}`);
    
    return {
      status: 500,
      jsonBody: {
        error: 'Failed to update vacation'
      }
    };
  }
};
