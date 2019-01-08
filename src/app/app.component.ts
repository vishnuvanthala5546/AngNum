import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  oddNumbers = [1, 3, 5, 7, 9,];
  evenNumbers = [2, 4, 6, 8, 10];
  onlyOdd = false;
  value = 10;
}
