import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRewardPage } from './add-reward.page';

describe('AddRewardPage', () => {
  let component: AddRewardPage;
  let fixture: ComponentFixture<AddRewardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRewardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
