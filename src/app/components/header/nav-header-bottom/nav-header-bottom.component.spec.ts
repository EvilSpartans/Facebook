import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderBottomComponent } from './nav-header-bottom.component';

describe('NavHeaderBottomComponent', () => {
  let component: NavHeaderBottomComponent;
  let fixture: ComponentFixture<NavHeaderBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHeaderBottomComponent]
    });
    fixture = TestBed.createComponent(NavHeaderBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
