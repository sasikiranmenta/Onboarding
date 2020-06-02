import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandlistComponent } from './demandlist.component';

describe('DemandlistComponent', () => {
  let component: DemandlistComponent;
  let fixture: ComponentFixture<DemandlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
