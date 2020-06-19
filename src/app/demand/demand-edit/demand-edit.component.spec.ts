import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DemandEditComponent } from './demand-edit.component';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { DemandService } from '../demand.service';
import { LogService } from 'src/app/shared/log.service';
import { AuthenticationService } from 'src/app/authentication/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, AuthService } from 'angularx-social-login';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from 'src/app/authentication/user.model';
import { Observable } from 'rxjs/Rx';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { Employee } from 'src/app/authentication/employee.model';
import { of } from 'rxjs';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DemandComponent } from '../demand.component';
import { DemandDetails } from 'src/app/shared/demand.model';

describe('DemandEditComponent', () => {
  let component: DemandEditComponent;
  let fixture: ComponentFixture<DemandEditComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let demandservice: DemandService;
  let logService: LogService;
  let authService: AuthenticationService;
  let httpTestingController: HttpTestingController;

  let dataservice: DataStorageService;
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
      declarations: [DemandEditComponent],
      providers: [AuthenticationService, AuthService, {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      }, { provide: ToastrService, useValue: toastrService }]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthenticationService);
    demandservice = TestBed.inject(DemandService);
    logService = TestBed.inject(LogService);
    dataservice = TestBed.inject(DataStorageService);

  });





//   it('sending user', () => {
//     let user = new User("dff", "fgh", " fg", 1);
//     component.ngOnInit();
//     authService.senduser(user);
//  });



  // it('fetch', () => {
  //   //let mock2 = [new DemandDetails(1, "JAVA", "2020-06-06", "not satisfied", "MUMBAI", 3, 1, "sasi", 2), new DemandDetails(2, "JAVA", "2020-06-06", "not satisfied", "MUMBAI", 3, 1, "sasi", 2)];
  //   let user = new User("dff", "fgh", " fg", 1);
  //   authService.senduser(user);
  //      const mock1 = {
  //     demandid: 1,
  //     skills: "PYTHON",
  //     start: "2020-06-18",
  //     status: "not satisfied",
  //     location: "MUMBAI",
  //     count: 3,
  //     empName: "Kiran",
  //     scount: 2,
  //     empid: 2
  //   };
  //   // let spy = spyOn(demandservice, 'setDemands').and.callThrough();
  //   // let spy2 = spyOn(dataservice, 'fetchDemand').and.returnValue(of(mock2));
  //   let spy3  = spyOn(demandservice,'getDemand').and.returnValue(mock1);
  //   demandservice.setDemands();

  //   component.ngOnInit();
    


  // });

  // it('should create', () => {
  //    expect(component).toBeTruthy();
  // });


 });
