import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechlabtestComponent } from './labtechlabtest.component';

describe('LabtechlabtestComponent', () => {
  let component: LabtechlabtestComponent;
  let fixture: ComponentFixture<LabtechlabtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechlabtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechlabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
