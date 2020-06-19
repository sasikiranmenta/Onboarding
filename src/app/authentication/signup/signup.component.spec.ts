import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule, AuthService } from 'angularx-social-login';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../auth.service';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { User } from '../user.model';
import { of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authSerivce: AuthenticationService;
  let route: ActivatedRoute;
  let router: Router;
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
      declarations: [SignupComponent],
      providers: [AuthenticationService, DataStorageService, AuthService, {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },{ provide: ToastrService, useValue: toastrService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authSerivce = TestBed.inject(AuthenticationService);
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('from login',()=>{
    let userMock = new User("sasi","sasi","sasi",1);
    let spy = spyOn(authSerivce,'getSignupUser').and.returnValue(userMock);
    component.fromlogin=true;
    component.ngOnInit();
    component.onSubmit();
    expect(authSerivce.getSignupUser).toHaveBeenCalled();
  });
});
