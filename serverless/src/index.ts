import { app } from '@azure/functions';
import { getVacations } from './functions/getVacations';
import { postVacation } from './functions/postVacation';
import { updateVacation } from './functions/updateVacation';
import { deleteVacation } from './functions/deleteVacation';

app.http('get-vacations', {
    methods: ['GET'],
    route: 'vacations',
    authLevel: 'anonymous',
    handler: getVacations
});

app.http('post-vacation', {
    methods: ['POST'],
    route: 'vacations',
    authLevel: 'anonymous',
    handler: postVacation
});

app.http('update-vacation', {
    methods: ['PUT'],
    route: 'vacations/{id}',
    authLevel: 'anonymous',
    handler: updateVacation
});

app.http('delete-vacation', {
    methods: ['DELETE'],
    route: 'vacations/{id}',
    authLevel: 'anonymous',
    handler: deleteVacation
});