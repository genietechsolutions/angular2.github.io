import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgClass } from '@angular/common';


import { AppComponent } from './app.component';
import { PipesexamplesComponent } from './pipesexamples/pipesexamples.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesexamplesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
