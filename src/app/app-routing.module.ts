import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradComponent } from './authentication/grad/grad.component';
import { GradEditComponent } from './grads/grad-edit/grad-edit.component';
import { GradsComponent } from './grads/grads.component';
import { GrademptyComponent } from './grads/gradempty/gradempty.component';
import { GradDetailComponent } from './grads/grad-detail/grad-detail.component';
import { HomeComponent } from './home/home.component';
import { DemandComponent } from './demand/demand.component';
import { TrendsComponent } from './trends/trends.component';
import { SignupComponent } from './authentication/signup/signup.component';


const routes: Routes = [{ path: '', component: GradComponent },
{path: 'signup', component: SignupComponent},
{
  path: 'grads', component: GradsComponent, children: [
    { path: '', component: GrademptyComponent },
    { path: 'new', component: GradEditComponent },
    { path: ':id', component: GradDetailComponent },
    { path: ':id/edit', component: GradEditComponent }
  ]
},
{path: 'home', component: HomeComponent},
{path: 'demand', component: DemandComponent},
{path: 'trends', component: TrendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
