import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockpComponent } from './clockp.component';

describe('ClockpComponent', () => {
  let component: ClockpComponent;
  let fixture: ComponentFixture<ClockpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
