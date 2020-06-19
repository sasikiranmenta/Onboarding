import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradsComponent } from './grads.component';
import { GradsService } from './grads.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { DataStorageService } from '../shared/datastorage.service';
import { of } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

describe('GradsComponent', () => {
  let component: GradsComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<GradsComponent>;
  let gradService: GradsService;
  let dataService: DataStorageService;
  let spydata: any;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GradsComponent ],
      providers:[{ provide: ToastrService, useValue: toastrService }]
    })
    .compileComponents();

    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    gradService = TestBed.inject(GradsService);
    httpTestingController = TestBed.inject(HttpTestingController);
    dataService =TestBed.inject(DataStorageService);
  });
   
  it('grads Comp',()=>{
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
    spydata = spyOn(dataService,'fetchGrads').and.returnValue(of(mock));
   // spyGrad = spyOn(gradService,'setGrads').and.callThrough();
    component.ngOnInit();
    expect(gradService.getGrads()).toEqual(mock);

  });

 
});
