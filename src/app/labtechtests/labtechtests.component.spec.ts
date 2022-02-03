import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechtestsComponent } from './labtechtests.component';

describe('LabtechtestsComponent', () => {
  let component: LabtechtestsComponent;
  let fixture: ComponentFixture<LabtechtestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechtestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
