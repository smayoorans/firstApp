import { Component, Input, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  @Input()
  searchValue = '';

  orderMessage = '';

  users: User[] = [];

  constructor(private dataShareService: DataShareService, 
    private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });

    this.dataShareService.getMessage().subscribe(d => {
      this.orderMessage = d;
    })
  }

}
