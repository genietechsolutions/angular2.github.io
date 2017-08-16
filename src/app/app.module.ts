import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgClass } from '@angular/common';
import { Validator } from '@angular/forms';



import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormBhavaniComponent } from './form-bhavani/form-bhavani.component';
import { MyformComponent } from './myform/myform.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PipesComponent,
    FormBhavaniComponent,
    MyformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
