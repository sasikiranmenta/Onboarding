import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradComponent } from './authentication/grad/grad.component';
import { GradEditComponent } from './grads/grad-edit/grad-edit.component';
import { GradsComponent } from './grads/grads.component';


import { HomeComponent } from './home/home.component';
import { DemandComponent } from './demand/demand.component';
import { TrendsComponent } from './trends/trends.component';
import { SignupComponent } from './authentication/signup/signup.component';

import { DemandEditComponent } from './demand/demand-edit/demand-edit.component';
import { PiechartComponent } from './trends/piechart/piechart.component';
import { BarchartComponent } from './trends/barchart/barchart.component';

import { AuthGuard } from './authentication/auth.guard';
import { HiringmanagerComponent } from './trends/hiringmanager/hiringmanager.component';
import { AdminComponent } from './authentication/admin/admin.component';


const routes: Routes = [{ path: '', component: GradComponent },
{path: 'signup', component: SignupComponent},
{
  path: 'grads', component: GradsComponent, canActivate: [AuthGuard], children: [
   
    { path: 'new', component: GradEditComponent },
    { path: ':id', component: GradEditComponent },
  ]
},
{path: 'home', component: HomeComponent},
{path: 'admin', component: AdminComponent},
{path: 'demands', component: DemandComponent,canActivate: [AuthGuard], children:[
 
  {path: 'new', component: DemandEditComponent},
  {path: ':id', component: DemandEditComponent},
]},
{path: 'trends', component: TrendsComponent,canActivate: [AuthGuard], children:[
  {path:'pie', component: PiechartComponent},
  {path:'bar', component: BarchartComponent},
  {path:'hm', component: HiringmanagerComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
