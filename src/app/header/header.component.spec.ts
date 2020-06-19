import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule, AuthService } from 'angularx-social-login';
import { AuthenticationService } from '../authentication/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../authentication/user.model';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let spy: any

  let service2: AuthenticationService;
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
      declarations: [HeaderComponent],
      providers: [AuthenticationService, AuthService, {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },{ provide: ToastrService, useValue: toastrService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service2 = TestBed.inject(AuthenticationService);


  });
  let user = new User("dff", "fgh", " fg", 1);
  it('sending user', () => {
    service2.senduser(user);
    component.ngOnInit();
    expect(component.isAuthenticated).toEqual(true);
  });

  it('send admin',() =>{
    service2.sendAdmin(true);
    component.ngOnInit();
    expect(component.admin).toEqual(true);
  });


  it('signout',()=>{
       component.signout();
       expect(component.isAuthenticated).toEqual(false);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
