import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechlabtestListComponent } from './labtechlabtest-list.component';

describe('LabtechlabtestListComponent', () => {
  let component: LabtechlabtestListComponent;
  let fixture: ComponentFixture<LabtechlabtestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechlabtestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechlabtestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
