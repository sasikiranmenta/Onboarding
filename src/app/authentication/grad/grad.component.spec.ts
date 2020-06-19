import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradComponent } from './grad.component';
import { AuthService, AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';
import { LogService } from 'src/app/shared/log.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { of } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

describe('GradComponent', () => {
  let component: GradComponent;
  let fixture: ComponentFixture<GradComponent>;
  let socialAuthServ: AuthService;
  let router: Router;
  let authenticationservice: AuthenticationService;
  let logService: LogService;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };

  const google_oauth: string = "1054283611108-t9mdmtqqts7j214vkj6p97ll07n3a98c.apps.googleusercontent.com";
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(google_oauth)
    }
  ]);
  function provideConfig() {
    return config;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, SocialLoginModule.initialize(config)],
      declarations: [GradComponent],
      providers: [AuthenticationService, DataStorageService, AuthService, {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },{ provide: ToastrService, useValue: toastrService }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('login',()=>{
  //   //let spy = spyOn(authenticationservice,'login').and.returnValue();
  //   let spy = spyOn(socialAuthServ,'signIn').and.returnValue(Promise);
  //   component.login('googlesignin');
  //   expect(authenticationservice.login).toHaveBeenCalled();
  // })

});
