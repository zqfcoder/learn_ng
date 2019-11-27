import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnumpComponent } from './rnump.component';

describe('RnumpComponent', () => {
  let component: RnumpComponent;
  let fixture: ComponentFixture<RnumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
