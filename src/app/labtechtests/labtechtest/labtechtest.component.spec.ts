import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechtestComponent } from './labtechtest.component';

describe('LabtechtestComponent', () => {
  let component: LabtechtestComponent;
  let fixture: ComponentFixture<LabtechtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
