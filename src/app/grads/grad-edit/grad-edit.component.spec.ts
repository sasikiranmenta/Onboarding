import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradEditComponent } from './grad-edit.component';

describe('GradEditComponent', () => {
  let component: GradEditComponent;
  let fixture: ComponentFixture<GradEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
