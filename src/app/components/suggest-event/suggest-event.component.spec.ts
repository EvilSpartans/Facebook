import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestEventComponent } from './suggest-event.component';

describe('SuggestEventComponent', () => {
  let component: SuggestEventComponent;
  let fixture: ComponentFixture<SuggestEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestEventComponent]
    });
    fixture = TestBed.createComponent(SuggestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
