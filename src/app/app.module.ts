import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ChartsModule } from 'ng2-charts'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminComponent } from './authentication/admin/admin.component';
import { GradComponent } from './authentication/grad/grad.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { GradsComponent } from './grads/grads.component';
import { GradEditComponent } from './grads/grad-edit/grad-edit.component';
import { GradlistComponent } from './grads/gradlist/gradlist.component';
import { GradDetailComponent } from './grads/grad-detail/grad-detail.component';
import { GradItemComponent } from './grads/gradlist/grad-item/grad-item.component';
import { HeaderComponent } from './header/header.component';
import { GrademptyComponent } from './grads/gradempty/gradempty.component';
import { HomeComponent } from './home/home.component';
import { DemandComponent } from './demand/demand.component';
import { TrendsComponent } from './trends/trends.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DemandDetailComponent } from './demand/demand-detail/demand-detail.component';
import { DemandEditComponent } from './demand/demand-edit/demand-edit.component';
import { DemandlistComponent } from './demand/demandlist/demandlist.component';
import { DemanditemComponent } from './demand/demandlist/demanditem/demanditem.component';
import { DemandemptyComponent } from './demand/demandempty/demandempty.component';
import { PiechartComponent } from './trends/piechart/piechart.component';
import { BarchartComponent } from './trends/barchart/barchart.component';
import { HiringmanagerComponent } from './trends/hiringmanager/hiringmanager.component';


const google_oauth: string = "1054283611108-t9mdmtqqts7j214vkj6p97ll07n3a98c.apps.googleusercontent.com";
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth)
  }
])




@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AdminComponent,
    GradComponent,
    SignupComponent,
    GradsComponent,
    GradEditComponent,
    GradlistComponent,
    GradDetailComponent,
    GradItemComponent,
    HeaderComponent,
    GrademptyComponent,
    HomeComponent,
    DemandComponent,
    TrendsComponent,
    DropdownDirective,
    DemandDetailComponent,
    DemandEditComponent,
    DemandlistComponent,
    DemanditemComponent,
    DemandemptyComponent,
    PiechartComponent,
    BarchartComponent,
    HiringmanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule.initialize(config),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
