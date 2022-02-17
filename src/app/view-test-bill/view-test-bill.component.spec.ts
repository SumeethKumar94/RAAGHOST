import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestBillComponent } from './view-test-bill.component';

describe('ViewTestBillComponent', () => {
  let component: ViewTestBillComponent;
  let fixture: ComponentFixture<ViewTestBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTestBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
