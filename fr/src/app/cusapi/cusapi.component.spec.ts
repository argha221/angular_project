import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusapiComponent } from './cusapi.component';

describe('CusapiComponent', () => {
  let component: CusapiComponent;
  let fixture: ComponentFixture<CusapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
