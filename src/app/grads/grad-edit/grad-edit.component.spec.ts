import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradEditComponent } from './grad-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GradsService } from '../grads.service';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { LogService } from 'src/app/shared/log.service';
import { AuthenticationService } from 'src/app/authentication/auth.service';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule, AuthService } from 'angularx-social-login';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from 'src/app/authentication/user.model';
import { of, Observable } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

describe('GradEditComponent', () => {
  let component: GradEditComponent;
  let fixture: ComponentFixture<GradEditComponent>;
  let route: ActivatedRoute;
  let router: Router;
  let gradsService: GradsService;
  let datastorage: DataStorageService;
  let logService: LogService;
  let authService: AuthenticationService;
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
      declarations: [GradEditComponent],
      providers: [AuthenticationService, DataStorageService, AuthService, {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },{ provide: ToastrService, useValue: toastrService }]
    },)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    gradsService = TestBed.inject(GradsService);
    datastorage = TestBed.inject(DataStorageService);
    logService = TestBed.inject(LogService);
    authService = TestBed.inject(AuthenticationService);
  });
  let user = new User("dff", "fgh", " fg", 1);
  it('send user', () => {
    authService.senduser(user);
    component.ngOnInit();
    expect(component.user).toEqual(user);
  });

  it('get data', () => {
    const mock = [{
      demandid: 1,
      skills: "PYTHON",
      start: "2020-06-18",
      status: "not satisfied",
      location: "MUMBAI",
      count: 3,
      empName: "Kiran",
      scount: 2,
      empid: 2
    }, {
      demandid: 2,
      skills: "PYTHON",
      start: "2020-06-18",
      status: "not satisfied",
      location: "MUMBAI",
      count: 3,
      empName: "Kiran",
      scount: 2,
      empid: 2
    }];
    

    let spy = spyOn(datastorage, 'fetchDemand').and.returnValue(of(mock));
    component.ngOnInit();
    
    expect(component.demands).toEqual(mock);

  });

  // it('onsubmit', () => {
  //   authService.senduser(user);
  //   component.ngOnInit();
  //   component.grad1 = {
  //     id: 2,
  //     demandId: 5,
  //     name: "SasiKiran",
  //     email: "sasikiranmenta@gmail.com",
  //     college: "ANGULAR",
  //     cgpa: 3,
  //     personalNumber: 9677298294,
  //     permanentAddress: "13/242,Mungamurivari street,nellore",
  //     presentAddress: "",
  //     location: "MUMBAI",
  //     onboardingStart: "2020-06-26",
  //     eta: "2020-06-20",
  //     bgvCheck: "Completed",
  //     onboardingStatus: "Verfied",
  //     skills: null
  //   };
  //   let spy = spyOn(datastorage, 'updateGrad').and.returnValue(of());
  //   var spy_grad = spyOn(gradsService, 'updateGrad').and.callThrough();
  //   component.onSubmit();
  // });

});
