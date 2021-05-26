import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundsViewComponent } from './mutual-funds-view.component';

describe('MutualFundsViewComponent', () => {
  let component: MutualFundsViewComponent;
  let fixture: ComponentFixture<MutualFundsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualFundsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
