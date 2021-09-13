import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOrderComponent } from './previous-order.component';

xdescribe('PreviousOrderComponent', () => {
  let component: PreviousOrderComponent;
  let fixture: ComponentFixture<PreviousOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
