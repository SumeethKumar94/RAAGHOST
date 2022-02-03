import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechlabtestsComponent } from './labtechlabtests.component';

describe('LabtechlabtestsComponent', () => {
  let component: LabtechlabtestsComponent;
  let fixture: ComponentFixture<LabtechlabtestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechlabtestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechlabtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
