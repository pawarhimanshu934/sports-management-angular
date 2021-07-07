import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  categoryValue:string="None";

  //getting categories of all events from parent component
  @Input() categories:string[];

  @Output() filterValue = new EventEmitter<string>();

  ngOnInit(): void {}

  sendFilterValue(value: string) {
    console.log('In Child component : ' + value);
    this.filterValue.emit(value);    
  }

  
}

