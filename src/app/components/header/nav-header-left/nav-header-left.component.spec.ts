import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderLeftComponent } from './nav-header-left.component';

describe('NavHeaderLeftComponent', () => {
  let component: NavHeaderLeftComponent;
  let fixture: ComponentFixture<NavHeaderLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHeaderLeftComponent]
    });
    fixture = TestBed.createComponent(NavHeaderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
