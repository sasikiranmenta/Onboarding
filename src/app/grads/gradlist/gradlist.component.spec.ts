import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradlistComponent } from './gradlist.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GradsService } from '../grads.service';
import { AuthenticationService } from 'src/app/authentication/auth.service';
import { LogService } from 'src/app/shared/log.service';
import { GoogleLoginProvider, AuthServiceConfig, SocialLoginModule, AuthService } from 'angularx-social-login';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { User } from 'src/app/authentication/user.model';
import { of } from 'rxjs';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

describe('GradlistComponent', () => {
  let component: GradlistComponent;
  let fixture: ComponentFixture<GradlistComponent>;
  let route: ActivatedRoute;
  let gradsService: GradsService;
  let authService: AuthenticationService;
  let logService: LogService;
  let dataService: DataStorageService;
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
      declarations: [GradlistComponent],
      providers: [AuthenticationService, DataStorageService, AuthService, {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },{ provide: ToastrService, useValue: toastrService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    route = TestBed.inject(ActivatedRoute);
    gradsService = TestBed.inject(GradsService);
    authService = TestBed.inject(AuthenticationService);
    logService = TestBed.inject(LogService);
    dataService = TestBed.inject(DataStorageService);
    router = TestBed.inject(Router);
  });
  let user = new User("dff", "fgh", " fg", 1);

  it('get user', () => {
    authService.senduser(user);
    component.ngOnInit();
    expect(component.user).toEqual(user);
  });

  it('get Grads', () => {
    const mock = [{
      id: 1,
      demandId: 5,
      name: "SasiKiran",
      email: "sasikiranmenta@gmail.com",
      college: "ANGULAR",
      cgpa: 3,
      personalNumber: 9677298294,
      permanentAddress: "13/242,Mungamurivari street,nellore",
      presentAddress: "",
      location: "MUMBAI",
      onboardingStart: "2020-06-26",
      eta: "2020-06-20",
      bgvCheck: "Completed",
      onboardingStatus: "Verfied",
      skills: null
    }];
    gradsService.sendGrads(mock);
    component.ngOnInit();
    expect(component.grads).toEqual(mock);

  });

  it('search', () => {
    const mock = [{
      id: 1,
      demandId: 5,
      name: "SasiKiran",
      email: "sasikiranmenta@gmail.com",
      college: "ANGULAR",
      cgpa: 3,
      personalNumber: 9677298294,
      permanentAddress: "13/242,Mungamurivari street,nellore",
      presentAddress: "",
      location: "MUMBAI",
      onboardingStart: "2020-06-26",
      eta: "2020-06-20",
      bgvCheck: "Completed",
      onboardingStatus: "Verfied",
      skills: null
    }, {
      id: 2,
      demandId: 5,
      name: "SasiKiran",
      email: "sasikiranmenta@gmail.com",
      college: "ANGULAR",
      cgpa: 3,
      personalNumber: 9677298294,
      permanentAddress: "13/242,Mungamurivari street,nellore",
      presentAddress: "",
      location: "MUMBAI",
      onboardingStart: "2020-06-26",
      eta: "2020-06-20",
      bgvCheck: "Completed",
      onboardingStatus: "Verfied",
      skills: null
    }];
    gradsService.sendGrads(mock);
    component.ngOnInit();
    let spy = spyOn(router, 'navigate');
    component.index=3;
    component.search();
    expect(router.navigate).toHaveBeenCalled();
    expect(component.index).toEqual(0);
  });


  it('new nav',()=>{
    let spy = spyOn(router,'navigate');
    component.onNew();
    expect(router.navigate).toHaveBeenCalled();
  });


  it('Delete',()=>{
    const mock = {
      id: 1,
      demandId: 5,
      name: "SasiKiran",
      email: "sasikiranmenta@gmail.com",
      college: "ANGULAR",
      cgpa: 3,
      personalNumber: 9677298294,
      permanentAddress: "13/242,Mungamurivari street,nellore",
      presentAddress: "",
      location: "MUMBAI",
      onboardingStart: "2020-06-26",
      eta: "2020-06-20",
      bgvCheck: "Completed",
      onboardingStatus: "Verfied",
      skills: null
    };
    authService.senduser(user);
    component.ngOnInit();
     let spy = spyOn(dataService, 'deleteGrad').and.returnValue(of());
    var spy_grad = spyOn(gradsService, 'setGrads').and.callThrough();
    component.onDelete(mock);
    expect(dataService.deleteGrad).toHaveBeenCalled();
     


  });


  

});
