import { Component } from '@angular/core';
import { CustomEventObj } from './home/home.component';

@Component({
  selector: 'app-root', // tag name on index.html where the content is injected
  templateUrl: './app.component.html', // or ./app.component.html (default)
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  
  constructor() { }

  response(res: CustomEventObj) {
    console.log(res.message);
  }
}
