import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //outputs a template or url
  template: '<h1>{{name}}</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ninja-directory';

  name = 'Gamygams1234';
}

