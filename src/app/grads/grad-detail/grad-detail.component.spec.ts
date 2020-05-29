import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradDetailComponent } from './grad-detail.component';

describe('GradDetailComponent', () => {
  let component: GradDetailComponent;
  let fixture: ComponentFixture<GradDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
