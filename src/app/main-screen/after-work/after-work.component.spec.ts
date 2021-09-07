import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterWorkComponent } from './after-work.component';

describe('AfterWorkComponent', () => {
  let component: AfterWorkComponent;
  let fixture: ComponentFixture<AfterWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
