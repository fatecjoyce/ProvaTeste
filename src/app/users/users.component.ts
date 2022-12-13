import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: Array<any>

  constructor(private userService : UserService) {
    this.user = new Array<any>()
  }

  ngOnInit(): void {
  }

  getUser() {
    this.userService.getUser().subscribe((user) => {
      this.user = user
    })
  }
}