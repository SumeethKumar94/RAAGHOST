import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmprescriptionsComponent } from './pharmprescriptions.component';

describe('PharmprescriptionsComponent', () => {
  let component: PharmprescriptionsComponent;
  let fixture: ComponentFixture<PharmprescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmprescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmprescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
