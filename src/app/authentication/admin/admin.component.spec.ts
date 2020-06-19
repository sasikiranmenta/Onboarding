import { async, ComponentFixture, TestBed} from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { of } from 'rxjs/internal/Observable/of';
import { AuthService, GoogleLoginProvider, AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { AuthenticationService } from '../auth.service';

import { User } from '../user.model';
import { ToastrService, ToastrModule, IndividualConfig } from 'ngx-toastr';



describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let spy: any
  let service: DataStorageService
  let service2: AuthenticationService
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
      declarations: [AdminComponent],
      providers: [AuthenticationService,DataStorageService, AuthService, {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },{ provide: ToastrService, useValue: toastrService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DataStorageService);
    service2 = TestBed.inject(AuthenticationService);
    //toastr = TestBed.inject(ToastrService);
  });

  let user = new User("dff", "fgh", " fg", 1);
  it('jbjb', () => {
    service2.senduser(user);
    component.ngOnInit();
    expect(component.user).toEqual(user);
  });

  it('get logs..', () => {
    let mockData = [{
      id: 31,
      message: "new onboardee has been created ",
      date: "2020-06-05",
      userid: 1
    }, {
      id: 31,
      message: "new onboardee has been created ",
      date: "2020-06-05",
      userid: 2
    }];

    spy = spyOn(service, 'getLog').and.returnValue(of(mockData));
    component.ngOnInit()
    expect(component.logs).toEqual(mockData);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
