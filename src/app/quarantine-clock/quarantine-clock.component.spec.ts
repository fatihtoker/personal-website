import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarantineClockComponent } from './quarantine-clock.component';

describe('QuarantineClockComponent', () => {
  let component: QuarantineClockComponent;
  let fixture: ComponentFixture<QuarantineClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarantineClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarantineClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
