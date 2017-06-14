import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiProvider {

  constructor() {
    console.log('Hello ApiProvider Provider');
  }

  getPasses() {
    return [
      {
        numeroPasse: 12,
        status: false,
        valide: new Date()
      },
       {
        numeroPasse: 13,
        status: true,
        valide: new Date()
      },
       {
        numeroPasse: 45,
        status: true,
        valide: new Date()
      }
    ]
  }
}
