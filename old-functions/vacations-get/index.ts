import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { vacationService } from '../services';

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  await vacationService.getVacations(context); // 👈 This calls the vacation service
};

export default httpTrigger;
