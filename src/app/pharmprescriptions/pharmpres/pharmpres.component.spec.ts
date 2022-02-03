import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmpresComponent } from './pharmpres.component';

describe('PharmpresComponent', () => {
  let component: PharmpresComponent;
  let fixture: ComponentFixture<PharmpresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmpresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
