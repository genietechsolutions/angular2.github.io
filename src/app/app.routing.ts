import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './myrouter/header/header.component';
import { FooterComponent } from './myrouter/footer/footer.component';
import { HomeComponent } from './myrouter/home/home.component';
import { AboutComponent } from './myrouter/about/about.component';
import { BlogComponent } from './myrouter/blog/blog.component';
import { ContactComponent } from './myrouter/contact/contact.component';


const appRoutes: Routes = [

  { path: 'index', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },

  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
