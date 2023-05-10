import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  @Input()
  searchText = 0;

  age = 10;

  @Output()
  onSubmit: EventEmitter<number> = new EventEmitter();

  constructor(private dataShareService: DataShareService) {
    console.log('constructor...1');
    // this.name = 'World'
  }

  ngOnInit() {
    console.log('ng On Init...3');
    //this.name = 'Hello';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes...2', changes);
  }

  onClick() {
    this.age = this.age + 1;
    // this.onSubmit.next(this.age);
    this.dataShareService.setMessage('World');

  }

  ngOnDestroy(){
    console.log('customer component: onDestroy');
  }
}
