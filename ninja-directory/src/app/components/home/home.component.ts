import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Task Tracker';
  myString: string = 'I like Chicken';
  myBoolean: boolean = true;

  constructor() {}

  // life cycle method
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('Toggle');
  }
}
