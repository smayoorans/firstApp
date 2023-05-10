import { Component, Input, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  @Input()
  searchValue = '';

  orderMessage = '';

  constructor(private dataShareService: DataShareService) { }

  ngOnInit(): void {
    this.dataShareService.getMessage().subscribe(d => {
      this.orderMessage = d;
    })
  }

}
