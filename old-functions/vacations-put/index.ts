import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { vacationService } from '../services';

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  await vacationService.putVacation(context);
};

export default httpTrigger;
