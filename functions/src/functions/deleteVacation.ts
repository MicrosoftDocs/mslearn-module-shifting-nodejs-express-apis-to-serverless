import { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { vacationService } from '../../services';

export async function deleteVacation(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);
  
  try {
    
    const id = request.params.id;

    if (!id) {
      return {
        status: 400,
        jsonBody: {
          error: 'ID parameter is required'
        }
      };
    }
    
    const deletedVacation = vacationService.deleteVacation(id);
    
    if (deletedVacation) {
      return {
        status: 204,
        jsonBody: {
          deleteVacation
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
    context.error(`Error deleting vacation: ${err.message}`);
    
    return {
      status: 500,
      jsonBody: {
        error: 'Failed to delete vacation'
      }
    };
  }
};


