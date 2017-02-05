import { Injectable } from '@angular/core';

import { User } from '../user';
import { Users } from '../test/mock-users';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Promise<User[]> {
    return Promise.resolve(Users);
  }
}