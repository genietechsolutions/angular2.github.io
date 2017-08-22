import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
@Component({
  selector: 'app-mdriven',
  templateUrl: './mdriven.component.html',
  styleUrls: ['./mdriven.component.css']
})
export class MdrivenComponent implements OnInit {
  rForm: FormGroup;
  constructor(private fb: FormBuilder) {
     this.createForm();
  }
 createForm() {
      this.rForm = this.fb.group({
        name: ['venkat', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      });
     }
     change() {
      this.rForm = this.fb.group({
        name: ['raj', Validators.compose([Validators.minLength(5), Validators.maxLength(10)])],
      });
     }
submitForm(value: any): void {
    console.log('Reactive Form Data:');
    console.log(value);
  }


  ngOnInit() {

  }

}
