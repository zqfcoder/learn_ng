import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMineComponent } from './popup-mine.component';

describe('PopupMineComponent', () => {
  let component: PopupMineComponent;
  let fixture: ComponentFixture<PopupMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
