"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const getVacations_1 = require("./functions/getVacations");
const postVacation_1 = require("./functions/postVacation");
const updateVacation_1 = require("./functions/updateVacation");
const deleteVacation_1 = require("./functions/deleteVacation");
functions_1.app.http('get-vacations', {
    methods: ['GET'],
    route: 'vacations',
    authLevel: 'anonymous',
    handler: getVacations_1.getVacations
});
functions_1.app.http('post-vacation', {
    methods: ['POST'],
    route: 'vacations',
    authLevel: 'anonymous',
    handler: postVacation_1.postVacation
});
functions_1.app.http('update-vacation', {
    methods: ['PUT'],
    route: 'vacations/{id}',
    authLevel: 'anonymous',
    handler: updateVacation_1.updateVacation
});
functions_1.app.http('delete-vacation', {
    methods: ['DELETE'],
    route: 'vacations/{id}',
    authLevel: 'anonymous',
    handler: deleteVacation_1.deleteVacation
});
