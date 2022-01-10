import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ninja-directory';


  ninja = {
    name : "Yoshi",
    belt: "red"
  }

  yell(e: any){
    alert("I am Yelling")
  }

}

