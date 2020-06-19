import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsComponent } from './trends.component';
import { Trendservice } from './trends.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DemandService } from '../demand/demand.service';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { DataStorageService } from '../shared/datastorage.service';
import { of } from 'rxjs';

describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;
  let service: Trendservice;
  let dataservice: DataStorageService;
  let spy: any;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule],
      declarations: [ TrendsComponent ],
      providers:[Trendservice, DataStorageService, DemandService, {provide: ToastrService,useValue: toastrService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service= TestBed.inject(Trendservice);
    dataservice= TestBed.inject(DataStorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('fetch demand',()=>{
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
    },{
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

    spy = spyOn(dataservice,'fetchDemand').and.returnValue(of(mock));
    let spy2 = spyOn(service,'onGet').and.callThrough();
    component.ngOnInit();
    expect(service.onGet).toHaveBeenCalled();

});




});
