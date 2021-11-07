import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjotComponent } from './subjot.component';

describe('SubjotComponent', () => {
  let component: SubjotComponent;
  let fixture: ComponentFixture<SubjotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
