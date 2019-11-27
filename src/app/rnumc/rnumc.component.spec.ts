import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnumcComponent } from './rnumc.component';

describe('RnumcComponent', () => {
  let component: RnumcComponent;
  let fixture: ComponentFixture<RnumcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnumcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnumcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
