import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesViewComponent } from './shares-view.component';

describe('SharesViewComponent', () => {
  let component: SharesViewComponent;
  let fixture: ComponentFixture<SharesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
