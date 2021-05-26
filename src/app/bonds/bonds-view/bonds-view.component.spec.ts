import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsViewComponent } from './bonds-view.component';

describe('BondsViewComponent', () => {
  let component: BondsViewComponent;
  let fixture: ComponentFixture<BondsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
