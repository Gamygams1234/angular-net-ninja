import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';


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
  @Output() onYell = new EventEmitter();

  fireYellEvent(e:any){
    this.onYell.emit(e);
  }

  constructor() {}

  // life cycle method
  ngOnInit(): void {

  }


  


}
