import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ob1Component } from './ob1.component';

describe('Ob1Component', () => {
  let component: Ob1Component;
  let fixture: ComponentFixture<Ob1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ob1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ob1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
