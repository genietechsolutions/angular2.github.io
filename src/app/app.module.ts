import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgClass } from '@angular/common';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
