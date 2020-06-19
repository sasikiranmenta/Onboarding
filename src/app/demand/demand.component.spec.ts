import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandComponent } from './demand.component';
import { DemandService } from './demand.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

describe('DemandComponent', () => {
  let component: DemandComponent;
  let fixture: ComponentFixture<DemandComponent>;
  let httpTestingController: HttpTestingController;
  let dem: DemandService;
  let spy: any;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DemandComponent],
      providers:[{ provide: ToastrService, useValue: toastrService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dem = TestBed.inject(DemandService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });



  it('call', () => {
    spy = spyOn(dem, 'setDemands');
    component.ngOnInit();
    expect(dem.setDemands).toHaveBeenCalled();
  });


});
