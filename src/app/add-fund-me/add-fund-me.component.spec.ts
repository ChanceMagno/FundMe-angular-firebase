import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundMeComponent } from './add-fund-me.component';

describe('AddFundMeComponent', () => {
  let component: AddFundMeComponent;
  let fixture: ComponentFixture<AddFundMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFundMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
