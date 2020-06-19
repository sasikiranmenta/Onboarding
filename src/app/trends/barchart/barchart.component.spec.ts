import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartComponent } from './barchart.component';
import { Trendservice } from '../trends.service';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('BarchartComponent', () => {
  let component: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;
  let service: Trendservice;
  let dataservice: DataStorageService;
  let spy: any;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule],
      declarations: [ BarchartComponent ],
      providers:[Trendservice, DataStorageService, {provide: ToastrService,useValue: toastrService}]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(Trendservice);
    dataservice = TestBed.inject(DataStorageService);
    spy = spyOn(dataservice,'fetchDemand').and.returnValue(of(mock));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fetching demand',()=>{
    expect(service.myMaploc).toEqual(component.myMaploc);
});
});
