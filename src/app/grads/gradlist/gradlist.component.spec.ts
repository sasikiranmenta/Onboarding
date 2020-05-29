import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradlistComponent } from './gradlist.component';

describe('GradlistComponent', () => {
  let component: GradlistComponent;
  let fixture: ComponentFixture<GradlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
