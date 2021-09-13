import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueProductupdateComponent } from './dialogue-productupdate.component';

describe('DialogueProductupdateComponent', () => {
  let component: DialogueProductupdateComponent;
  let fixture: ComponentFixture<DialogueProductupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueProductupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueProductupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
