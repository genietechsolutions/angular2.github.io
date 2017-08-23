

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule  } from '@angular/router';
import{ RoutingModule} from './routing.module';


import { AppComponent } from './app.component';

import { RoutingComponent } from './routing/routing.component';
import{routingComponents} from './routing.module';
import { HeaderComponent } from './components 1/header/header.component';
import { HomeComponent } from './components 1/home/home.component';
import { ContactComponent } from './components 1/contact/contact.component';
import { AboutComponent } from './components 1/about/about.component';
import { ProductsComponent } from './components 1/products/products.component';


import { CapHeaderComponent } from './cap-header/cap-header.component';

@NgModule({
  declarations: [
    AppComponent,
    
    RoutingComponent,
    routingComponents,
    
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
    
    CapHeaderComponent
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
