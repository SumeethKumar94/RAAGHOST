import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicineBillComponent } from './view-medicine-bill.component';

describe('ViewMedicineBillComponent', () => {
  let component: ViewMedicineBillComponent;
  let fixture: ComponentFixture<ViewMedicineBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMedicineBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicineBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
