import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  record=['xys','asdf','asdf2','asdf']
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
