import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmpresListComponent } from './pharmpres-list.component';

describe('PharmpresListComponent', () => {
  let component: PharmpresListComponent;
  let fixture: ComponentFixture<PharmpresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmpresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmpresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
