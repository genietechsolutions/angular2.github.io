import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  record=['xys','asdf','asdf2','asdf'];
  name: string ='Iam PrAdEeP KuMaR';
  Birthday = new Date(1995,12,2);
}

