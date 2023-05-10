import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchField = 0;
  name = '';

  onChangeSearchField() {
    //this.searchField = this.searchField + 1;
    this.searchField += 1;
  
  }
  // constructor() {
  //   console.log('constructor...1');
  //   // this.name = 'World'
  // }

  // ngOnInit() {
  //   console.log('ng On Init...3');
  //   //this.name = 'Hello';
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ng on changes...2');
  // }
  
  onChangeValue(event: any) {
    console.log('App component');
    console.log(event);
    this.name = event;
  }

}
