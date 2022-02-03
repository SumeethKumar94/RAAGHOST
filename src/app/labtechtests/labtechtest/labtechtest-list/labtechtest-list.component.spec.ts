import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechtestListComponent } from './labtechtest-list.component';

describe('LabtechtestListComponent', () => {
  let component: LabtechtestListComponent;
  let fixture: ComponentFixture<LabtechtestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechtestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechtestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
