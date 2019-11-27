import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ob0Component } from './ob0.component';

describe('Ob0Component', () => {
  let component: Ob0Component;
  let fixture: ComponentFixture<Ob0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ob0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ob0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
