import { AboutComponent } from './components 1/about/about.component';
import { ContactComponent } from './components 1/contact/contact.component';
import { ProductsComponent } from './components 1/products/products.component';
import { HomeComponent } from './components 1/home/home.component';
import { HeaderComponent } from './components 1/header/header.component';

import{ NgModule } from '@angular/core';
import{ RouterModule,Routes } from '@angular/router';

import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

import { CapHeaderComponent } from './cap-header/cap-header.component';



const routes:Routes=[
    
    
    {path:'departments',component:DepartmentlistComponent},
    {path:'employees',component:EmployeelistComponent},


    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'products',component:ProductsComponent}
    
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class RoutingModule{}
export const routingComponents=[DepartmentlistComponent,EmployeelistComponent ]