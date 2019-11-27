import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MformComponent } from './mform.component';

describe('MformComponent', () => {
  let component: MformComponent;
  let fixture: ComponentFixture<MformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
