import { Component} from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  public name='Reethu Pipes';
  name1='WELCOME';
  name2='good morning';
  a: number = 100;
  b: number = 154;
  today:number=Date.now();
  pi: number = 3.141592;
  e: number = 2.718281828459045;
 /* messages: any[] = ['Message 5'];
  messageMapping:
      {[k: string]: string} = {'=0': 'No messages.', '=1': 'One message.', 'other': '# messages.'};*/
}

/*export class JsonPipeComponent {
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}*/
