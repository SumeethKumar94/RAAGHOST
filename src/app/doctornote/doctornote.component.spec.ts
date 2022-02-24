import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctornoteComponent } from './doctornote.component';

describe('DoctornoteComponent', () => {
  let component: DoctornoteComponent;
  let fixture: ComponentFixture<DoctornoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctornoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctornoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
