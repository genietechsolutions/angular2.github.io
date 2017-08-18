import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule   } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgClass } from '@angular/common';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MdrivenComponent } from './mdriven/mdriven.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MdrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    birthday = new Date(1988, 3, 15); // April 15, 1988
}
