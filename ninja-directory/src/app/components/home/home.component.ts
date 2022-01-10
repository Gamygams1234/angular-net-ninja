import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // inputs: ["ninja"],
})
export class HomeComponent implements OnInit {


  title: string = "this is the title"

  myBoolean: boolean = true;

  @Input() ninja:any;



  constructor() {}

  // life cycle method
  ngOnInit(): void {}


  alertMe(val: any){
    alert(val);
  }


}
