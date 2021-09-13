import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueProductaddComponent } from './dialogue-productadd.component';

describe('DialogueProductaddComponent', () => {
  let component: DialogueProductaddComponent;
  let fixture: ComponentFixture<DialogueProductaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueProductaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueProductaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
