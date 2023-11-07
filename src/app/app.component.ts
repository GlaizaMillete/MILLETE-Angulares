import { Component } from '@angular/core';
import { BackEndService } from './back-end.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulares';

  constructor(private backEndService: BackEndService) {
    this.backEndService.fetchData();
  }
}