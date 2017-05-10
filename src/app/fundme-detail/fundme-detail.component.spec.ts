import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundmeDetailComponent } from './fundme-detail.component';

describe('FundmeDetailComponent', () => {
  let component: FundmeDetailComponent;
  let fixture: ComponentFixture<FundmeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundmeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundmeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
