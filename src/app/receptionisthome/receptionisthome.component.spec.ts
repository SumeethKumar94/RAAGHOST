import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionisthomeComponent } from './receptionisthome.component';

describe('ReceptionisthomeComponent', () => {
  let component: ReceptionisthomeComponent;
  let fixture: ComponentFixture<ReceptionisthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionisthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionisthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
