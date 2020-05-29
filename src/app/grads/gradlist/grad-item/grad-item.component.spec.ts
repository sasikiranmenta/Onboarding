import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradItemComponent } from './grad-item.component';

describe('GradItemComponent', () => {
  let component: GradItemComponent;
  let fixture: ComponentFixture<GradItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
