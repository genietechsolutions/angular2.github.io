import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/form.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 public model = new Employee('venkat', 'ch', 'venkat@gmail.com', 90595959);
 submitForm(form: any) {
  console.log(form);
 }
  constructor() {

   }

  ngOnInit() {
  }

}
