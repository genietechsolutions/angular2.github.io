import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
today:number = Date.now();
value: string;
  change(value: string) { this.value = value; }

  a:number= 0.5923456;
  b:number=0.365;
}
