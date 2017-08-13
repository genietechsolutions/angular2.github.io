import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule,DatepickerModule } from 'ngx-bootstrap';
import { routing }  from './app.routing';
import { NgClass } from '@angular/common';


import { AppComponent } from './app.component';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';
import { MyformCmpComponent } from './myform-cmp/myform-cmp.component';
import { HeaderCmpComponent } from './header-cmp/header-cmp.component';
import { FooterCmpComponent } from './footer-cmp/footer-cmp.component';
import { MyRouteCmpComponent } from './my-route-cmp/my-route-cmp.component';
import { HeaderComponent } from './myrouter/header/header.component';
import { FooterComponent } from './myrouter/footer/footer.component';
import { HomeComponent } from './myrouter/home/home.component';
import { AboutComponent } from './myrouter/about/about.component';
import { BlogComponent } from './myrouter/blog/blog.component';
import { ContactComponent } from './myrouter/contact/contact.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCmpComponent,
    MyformCmpComponent,
    HeaderCmpComponent,
    FooterCmpComponent,
    MyRouteCmpComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AlertModule,
	DatepickerModule,
	routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
