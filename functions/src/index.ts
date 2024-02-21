import { app } from '@azure/functions';
import { getVacations } from './functions/getVacations';
import { postVacation } from './functions/postVacation';
import { updateVacation } from './functions/updateVacation';
import { deleteVacation } from './functions/deleteVacation';

app.http('getVacations', {
    methods: ['GET'],
    route: 'vacations',
    authLevel: 'anonymous',
    handler: getVacations
});

app.http('postVacation', {
    methods: ['POST'],
    route: 'vacations',
    authLevel: 'anonymous',
    handler: postVacation
});

app.http('updateVacation', {
    methods: ['PUT'],
    route: 'vacations/{id}',
    authLevel: 'anonymous',
    handler: updateVacation
});

app.http('deleteVacation', {
    methods: ['DELETE'],
    route: 'vacations/{id}',
    authLevel: 'anonymous',
    handler: deleteVacation
});