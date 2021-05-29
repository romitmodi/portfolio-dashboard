import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundDetailComponent } from './mutual-fund-detail.component';

describe('MutualFundDetailComponent', () => {
  let component: MutualFundDetailComponent;
  let fixture: ComponentFixture<MutualFundDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualFundDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
