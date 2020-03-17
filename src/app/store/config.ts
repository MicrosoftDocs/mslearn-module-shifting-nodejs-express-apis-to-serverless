import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from './../../environments/environment';

const root = environment.API;

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root, // default root path to the server's web api

  entityHttpResourceUrls: {
    Vacation: {
      // You must specify the root as part of the resource URL.
      entityResourceUrl: `${root}/vacations/`,
      collectionResourceUrl: `${root}/vacations/`
    }
  }
};
