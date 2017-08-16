import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgClass } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { Validator } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    FormsComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
