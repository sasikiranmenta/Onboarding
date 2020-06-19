import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartComponent } from './piechart.component';
import { Trendservice } from '../trends.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { of } from 'rxjs';

describe('PiechartComponent', () => {
  let component: PiechartComponent;
  let fixture: ComponentFixture<PiechartComponent>;
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
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PiechartComponent],
      providers: [Trendservice, DataStorageService, { provide: ToastrService, useValue: toastrService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(Trendservice);
    dataservice = TestBed.inject(DataStorageService);
    spy = spyOn(dataservice, 'fetchDemand').and.returnValue(of(mock));



  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('fetching demand', () => {
    expect(service.myMap).toEqual(component.mapskills);


  });

});
