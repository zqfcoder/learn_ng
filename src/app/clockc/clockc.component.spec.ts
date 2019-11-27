import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockcComponent } from './clockc.component';

describe('ClockcComponent', () => {
  let component: ClockcComponent;
  let fixture: ComponentFixture<ClockcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
