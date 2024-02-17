import { app } from '@azure/functions';
import { getVacations } from './functions/getVacations';

app.http('get-vacations', {
    methods: ['GET'],
    route: 'vacations',
    authLevel: 'anonymous',
    handler: getVacations
});

