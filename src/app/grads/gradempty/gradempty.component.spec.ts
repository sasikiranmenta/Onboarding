import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrademptyComponent } from './gradempty.component';

describe('GrademptyComponent', () => {
  let component: GrademptyComponent;
  let fixture: ComponentFixture<GrademptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrademptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrademptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
