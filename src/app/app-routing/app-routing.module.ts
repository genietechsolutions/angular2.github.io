import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent, },
  {path: 'home', component: HomeComponent, },
  {path: 'blog', component: BlogComponent, },
  {path: 'contact', component: ContactComponent, },
  {path: 'service', component: ServiceComponent, },
  {path: '', component: HomeComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

 }

 export const routing: AppRoutingModule = RouterModule.forRoot(routes);
