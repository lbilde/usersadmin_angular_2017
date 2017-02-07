import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  title = "Hi all";
  users: Promise<User[]>; 

  constructor(private userService: UserService) {  }

  getUsers(): void {
    //this.userService.getUsers().then(returnedUsers => this.users = returnedUsers);
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
    this.getUsers();
  }

  
}