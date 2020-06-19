import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AuthService, AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../authentication/auth.service';
import { DataStorageService } from '../shared/datastorage.service';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let auth: AuthService;
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
      imports: [HttpClientTestingModule, RouterTestingModule,SocialLoginModule.initialize(config)],
      declarations: [ HomeComponent ],
      providers: [AuthenticationService,DataStorageService, AuthService, {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },{ provide: ToastrService, useValue: toastrService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     auth = TestBed.inject(AuthService);
     router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
