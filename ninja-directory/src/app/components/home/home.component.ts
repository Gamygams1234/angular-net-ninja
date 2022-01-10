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

  ninja = {
    name : "Yoshi",
    belt: "black"
  }


  constructor() {}

  // life cycle method
  ngOnInit(): void {}


  alertMe(val: any){
    alert(val);
  }


}
