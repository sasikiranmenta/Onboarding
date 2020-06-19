import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandlistComponent } from './demandlist.component';
import { GoogleLoginProvider, AuthServiceConfig, SocialLoginModule, AuthService } from 'angularx-social-login';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from 'src/app/authentication/auth.service';
import { DemandService } from '../demand.service';
import { LogService } from 'src/app/shared/log.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/authentication/user.model';
import { of } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

describe('DemandlistComponent', () => {
  let component: DemandlistComponent;
  let fixture: ComponentFixture<DemandlistComponent>;

  let spy: any;
  let demand: DemandService;
  let log: LogService;
  let auth: AuthenticationService;
  let rout: ActivatedRoute;
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
      declarations: [DemandlistComponent],
      providers: [AuthenticationService, AuthService, {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },{ provide: ToastrService, useValue: toastrService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    demand = TestBed.inject(DemandService);
    log = TestBed.inject(LogService);
    auth = TestBed.inject(AuthenticationService);
    rout = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
  });

  let user = new User("dff", "fgh", " fg", 1);
  it('sending user', () => {
    auth.senduser(user);
    component.ngOnInit();
    expect(component.user).toEqual(user);
  });

  it('send admin', () => {
    auth.sendAdmin(true);
    component.ngOnInit();
    expect(component.admin).toEqual(false);
  });

  it('make demand', () => {
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

    demand.sendDemands(mock);
    component.ngOnInit();
    expect(component.demands).toEqual(mock);
  });

  it('navigate',()=>{
    spy = spyOn(router,'navigate');
    component.onNew();
    expect(router.navigate).toHaveBeenCalled();
  });

  



});
