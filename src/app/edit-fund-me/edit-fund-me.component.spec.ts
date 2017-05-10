import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFundMeComponent } from './edit-fund-me.component';

describe('EditFundMeComponent', () => {
  let component: EditFundMeComponent;
  let fixture: ComponentFixture<EditFundMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFundMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFundMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
