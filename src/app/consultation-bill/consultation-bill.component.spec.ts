import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationBillComponent } from './consultation-bill.component';

describe('ConsultationBillComponent', () => {
  let component: ConsultationBillComponent;
  let fixture: ComponentFixture<ConsultationBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
