import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPathComponent } from './selection-path.component';

describe('SelectionPathComponent', () => {
  let component: SelectionPathComponent;
  let fixture: ComponentFixture<SelectionPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
