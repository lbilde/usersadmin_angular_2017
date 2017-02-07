import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { RequestMethod, Response, ResponseOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer }   from 'rxjs/Observer';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id: 'eff332ff22', username: 'lbilde', password:'123', email:'cheese@namnam.dk'},
      {id: 'eff332ff2222', username: 'lbilde22', password:'123', email:'cheese22@namnam22.dk'},
      {id: 'eff332ff2233', username: 'lbilde23', password:'123', email:'cheese33@namnam33.dk'}
    ];
    return {users};
  }
}